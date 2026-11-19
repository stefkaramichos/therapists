"""Double-click launcher support; keeps installation inside the application folder."""
import json
import os
from pathlib import Path
import subprocess
import sys
import time
import urllib.request
import webbrowser

ROOT = Path(__file__).resolve().parent
URL = "http://127.0.0.1:8787/index.html"


def running():
    try:
        with urllib.request.urlopen("http://127.0.0.1:8787/health", timeout=1) as response:
            health = json.load(response)
            return health.get("engine", "").startswith("whisper-")
    except Exception:
        return False


def main():
    if running():
        webbrowser.open(URL)
        print("Το Whisper τρέχει ήδη. Η εφαρμογή άνοιξε στον browser.")
        return
    settings = {}
    if (ROOT / ".runtime.json").exists():
        settings = json.loads((ROOT / ".runtime.json").read_text())
    python = settings.get("python", "")
    if not python or not Path(python).is_file():
        venv = ROOT / ".venv"
        python = str(venv / ("Scripts/python.exe" if os.name == "nt" else "bin/python"))
        if not Path(python).is_file():
            subprocess.check_call([sys.executable, "-m", "venv", str(venv)])
        subprocess.check_call([python, "-m", "pip", "install", "--disable-pip-version-check", "-r", str(ROOT / "requirements.txt")])
    environment = os.environ.copy()
    environment.setdefault("ASR_CACHE_DIR", settings.get("cache", str(ROOT / ".models")))
    environment.setdefault("HF_HOME", str(Path(environment["ASR_CACHE_DIR"]).parent / ".huggingface"))
    process = subprocess.Popen([python, str(ROOT / "whisper_server.py")], env=environment)
    try:
        for _ in range(40):
            if process.poll() is not None:
                raise RuntimeError("Ο server σταμάτησε. Δες το μήνυμα παραπάνω.")
            if running():
                webbrowser.open(URL)
                break
            time.sleep(0.25)
        print("Κράτησε αυτό το παράθυρο ανοιχτό όσο χρησιμοποιείς το Whisper. Ctrl+C για τερματισμό.")
        process.wait()
    except KeyboardInterrupt:
        process.terminate()
        process.wait()


if __name__ == "__main__":
    main()
