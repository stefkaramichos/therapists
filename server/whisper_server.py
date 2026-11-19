"""Local Whisper large-v3 ASR and static application server. No API key required."""
from __future__ import annotations

import io
import json
import logging
import os
import math
from email.parser import BytesParser
from email.policy import default
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Lock, Thread
from urllib.parse import urlsplit

APP_ROOT = Path(__file__).resolve().parent.parent
MODEL_NAME = os.environ.get("ASR_MODEL", "large-v3")
CACHE_DIR = Path(os.environ.get("ASR_CACHE_DIR", str(APP_ROOT / "server" / ".models")))
MAX_UPLOAD = 25 * 1024 * 1024
ALLOWED_TYPES = {"webm", "wav", "mp3", "mp4", "m4a", "ogg", "flac", "mpeg", "mpga"}


def parse_multipart(body: bytes, content_type: str):
    if not content_type.lower().startswith("multipart/form-data"):
        raise ValueError("Απαιτείται ηχητικό σε multipart/form-data.")
    message = BytesParser(policy=default).parsebytes(
        b"Content-Type: " + content_type.encode("ascii") + b"\r\nMIME-Version: 1.0\r\n\r\n" + body
    )
    if not message.is_multipart():
        raise ValueError("Μη έγκυρη αποστολή ηχητικού.")
    audio = None
    fields = {}
    for part in message.iter_parts():
        name = part.get_param("name", header="content-disposition")
        data = part.get_payload(decode=True) or b""
        if name == "audio" and part.get_filename():
            extension = Path(part.get_filename()).suffix.lower().lstrip(".")
            if extension not in ALLOWED_TYPES:
                raise ValueError("Μη υποστηριζόμενος τύπος ηχητικού.")
            audio = data
        elif name and not part.get_filename():
            fields[name] = data.decode("utf-8", errors="replace").strip()
    if not audio:
        raise ValueError("Δεν παραλήφθηκε ηχητικό.")
    return audio, fields


class WhisperEngine:
    def __init__(self):
        self.model = None
        self.state = "loading"
        self.error = ""
        self.busy = Lock()

    def load(self):
        try:
            from faster_whisper import WhisperModel

            CACHE_DIR.mkdir(parents=True, exist_ok=True)
            options = dict(
                device=os.environ.get("ASR_DEVICE", "cpu"),
                compute_type=os.environ.get("ASR_COMPUTE_TYPE", "int8"),
                cpu_threads=int(os.environ.get("ASR_THREADS", str(min(4, os.cpu_count() or 2)))),
                download_root=str(CACHE_DIR),
            )
            try:
                self.model = WhisperModel(MODEL_NAME, local_files_only=True, **options)
            except Exception:
                self.model = WhisperModel(MODEL_NAME, **options)
            self.state = "ready"
            logging.info("Whisper %s ready", MODEL_NAME)
        except Exception:
            self.state = "error"
            self.error = "Το Whisper δεν φορτώθηκε. Έλεγξε την εγκατάσταση και τη σύνδεση για τη λήψη του μοντέλου."
            logging.exception("Whisper could not load")

    def health(self):
        return {
            "ok": self.state == "ready",
            "status": self.state,
            "engine": f"whisper-{MODEL_NAME}",
            "provider": "faster-whisper (local)",
            "busy": self.busy.locked(),
            "error": self.error,
            "local": True,
        }

    def transcribe(self, audio: bytes, language: str):
        # Do not supply the target word, question, or a corrective text prompt.
        # These can bias recognition towards the expected adult production.
        # Decode the *uploaded recording*, never a target word or previous transcript.
        from faster_whisper.audio import decode_audio
        import numpy as np
        samples = decode_audio(io.BytesIO(audio), sampling_rate=16000)
        if len(samples) < 3200:
            raise ValueError("Η ηχογράφηση είναι υπερβολικά σύντομη. Δοκίμασε ξανά.")
        rms = float(np.sqrt(np.mean(np.square(samples.astype(np.float64)))))
        peak = float(np.max(np.abs(samples)))
        if not math.isfinite(rms) or rms < 0.0015 or peak < 0.008:
            raise ValueError("Δεν ανιχνεύτηκε επαρκές ηχητικό σήμα. Δεν καταχωρίστηκε απάντηση.")
        segments, info = self.model.transcribe(
            io.BytesIO(audio),
            language=language,
            task="transcribe",
            beam_size=5,
            temperature=0.0,
            condition_on_previous_text=False,
            initial_prompt=None,
            word_timestamps=True,
            vad_filter=True,
            vad_parameters={"min_silence_duration_ms": 500, "speech_pad_ms": 250, "min_speech_duration_ms": 120},
            hallucination_silence_threshold=1.0,
            no_speech_threshold=0.5,
            log_prob_threshold=-1.0,
        )
        results = []
        words = []
        for segment in segments:
            # Reject segments the decoder itself marks as silence or unreliable.
            if segment.no_speech_prob > 0.5 or segment.avg_logprob < -1.0:
                continue
            if not segment.text.strip():
                continue
            results.append({"start": segment.start, "end": segment.end, "text": segment.text.strip()})
            for word in segment.words or []:
                words.append({
                    "word": word.word.strip(), "start": word.start, "end": word.end,
                    "probability": word.probability,
                })
        text = " ".join(segment["text"] for segment in results).strip()
        if not text:
            raise ValueError("Δεν ανιχνεύτηκε αξιόπιστη ομιλία. Δεν καταχωρίστηκε απάντηση. Άκουσε το ηχητικό και δοκίμασε ξανά.")
        return {
            "text": text,
            "engine": f"whisper-{MODEL_NAME}",
            "provider": "faster-whisper (local)",
            "language": info.language,
            "duration": info.duration,
            "segments": results,
            "words": words,
            "alternatives": [],
            # Word decoder probabilities are not calibrated clinical confidence.
            "confidence": None,
            "requiresClinicianReview": True,
        }


class Handler(SimpleHTTPRequestHandler):
    engine: WhisperEngine
    static_extensions = {".html", ".js", ".css", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".woff", ".woff2"}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(APP_ROOT), **kwargs)

    def end_headers(self):
        # Local app and historical localhost/file previews only.
        origin = self.headers.get("Origin", "")
        if origin in {"null", "http://127.0.0.1:4176", "http://localhost:4176", "http://127.0.0.1:8787", "http://localhost:8787"}:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")
        self.send_header("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def json_response(self, status: int, payload):
        body = json.dumps(payload, ensure_ascii=False, allow_nan=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def send_head(self):
        path = urlsplit(self.path).path
        if path == "/health":
            self.json_response(200, self.engine.health())
            return None
        resolved = Path(self.translate_path(path)).resolve()
        if not resolved.is_relative_to(APP_ROOT) or "server" in resolved.relative_to(APP_ROOT).parts:
            self.send_error(404)
            return None
        if path != "/" and (not resolved.is_file() or resolved.suffix.lower() not in self.static_extensions):
            self.send_error(404)
            return None
        return super().send_head()

    def do_POST(self):
        if urlsplit(self.path).path != "/api/asr":
            self.json_response(404, {"error": "Not found"})
            return
        origin = self.headers.get("Origin", "")
        if origin and origin not in ({"null", "http://127.0.0.1:4176", "http://localhost:4176", "http://127.0.0.1:8787", "http://localhost:8787"} | ({os.environ["PUBLIC_ORIGIN"].rstrip("/")} if os.environ.get("PUBLIC_ORIGIN") else set())):
            self.json_response(403, {"error": "Άνοιξε την εφαρμογή από την τοπική διεύθυνσή της."})
            return
        if self.engine.state != "ready":
            self.json_response(503, {"error": self.engine.error or "Το Whisper φορτώνει ακόμη. Περίμενε να εμφανιστεί η ένδειξη ετοιμότητας."})
            return
        if not self.engine.busy.acquire(blocking=False):
            self.json_response(409, {"error": "Το Whisper μεταγράφει ήδη ένα ηχητικό. Δοκίμασε ξανά σε λίγο."})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > MAX_UPLOAD:
                self.json_response(413, {"error": "Το ηχητικό πρέπει να είναι από 1 byte έως 25 MB."})
                return
            self.connection.settimeout(30)
            body = self.rfile.read(length)
            if len(body) != length:
                raise ValueError("Η αποστολή ηχητικού δεν ολοκληρώθηκε.")
            audio, fields = parse_multipart(body, self.headers.get("Content-Type", ""))
            language = fields.get("language", "el").lower().split("-")[0]
            if language != "el":
                raise ValueError("Η έκδοση αυτή είναι ρυθμισμένη για ελληνική ομιλία.")
            self.json_response(200, self.engine.transcribe(audio, language))
        except ValueError as error:
            self.json_response(422, {"error": str(error)})
        except (BrokenPipeError, ConnectionResetError):
            logging.info("Transcription client disconnected")
        except Exception:
            logging.exception("Transcription failed")
            self.json_response(500, {"error": "Η μεταγραφή απέτυχε. Το ηχητικό παραμένει διαθέσιμο στην εφαρμογή για ακρόαση και επανάληψη."})
        finally:
            self.engine.busy.release()


def main():
    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
    engine = WhisperEngine()
    Handler.engine = engine
    port = int(os.environ.get("ASR_PORT", "8787"))
    server = ThreadingHTTPServer((os.environ.get("ASR_HOST", "127.0.0.1"), port), Handler)
    Thread(target=engine.load, daemon=True).start()
    print(f"Auto Therapist: http://127.0.0.1:{port}/index.html", flush=True)
    print(f"Loading Whisper {MODEL_NAME}; first run downloads the model.", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
