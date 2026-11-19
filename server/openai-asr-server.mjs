import http from "node:http";

const port = Number(process.env.ASR_PORT || 8787);
const openAiApiKey = process.env.OPENAI_API_KEY || "";
const model = process.env.ASR_MODEL || "gpt-4o-transcribe";
const endpoint = process.env.OPENAI_TRANSCRIPTION_URL || "https://api.openai.com/v1/audio/transcriptions";
const allowedOrigin = process.env.ASR_ALLOWED_ORIGIN || "*";

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": allowedOrigin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization",
  });
  response.end(JSON.stringify(payload));
}

function collectRequest(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

function parseMultipart(body, contentType) {
  const boundaryMatch = /boundary=([^;]+)/i.exec(contentType || "");
  if (!boundaryMatch) throw new Error("Missing multipart boundary.");
  const boundary = `--${boundaryMatch[1]}`;
  const bodyText = body.toString("binary");
  const parts = bodyText.split(boundary).slice(1, -1);
  const fields = new Map();
  let file = null;

  for (const part of parts) {
    const cleanPart = part.replace(/^\r\n/, "").replace(/\r\n$/, "");
    const headerEnd = cleanPart.indexOf("\r\n\r\n");
    if (headerEnd < 0) continue;
    const rawHeaders = cleanPart.slice(0, headerEnd);
    const rawContent = cleanPart.slice(headerEnd + 4);
    const disposition = /content-disposition:\s*form-data;([^\r\n]+)/i.exec(rawHeaders)?.[1] || "";
    const name = /name="([^"]+)"/i.exec(disposition)?.[1] || "";
    const filename = /filename="([^"]*)"/i.exec(disposition)?.[1] || "";
    const type = /content-type:\s*([^\r\n]+)/i.exec(rawHeaders)?.[1]?.trim() || "application/octet-stream";
    const content = Buffer.from(rawContent, "binary");
    if (filename) {
      file = { name, filename, type, content };
    } else if (name) {
      fields.set(name, content.toString("utf8").trim());
    }
  }

  if (!file) throw new Error("No audio file was received.");
  return { fields, file };
}

function normalizeLanguage(value) {
  const language = String(value || "el").toLowerCase();
  if (language.startsWith("el")) return "el";
  return language.split("-")[0] || "el";
}

async function transcribeWithOpenAI({ fields, file }) {
  if (!openAiApiKey) {
    throw new Error("OPENAI_API_KEY is not set on the ASR server.");
  }

  const form = new FormData();
  const blob = new Blob([file.content], { type: file.type });
  form.append("file", blob, file.filename || "child-response.webm");
  form.append("model", model);
  form.append("language", normalizeLanguage(fields.get("language")));
  form.append("response_format", "json");

  const prompt = [
    "Greek child speech in a speech-language assessment.",
    "Transcribe exactly what the child says in Greek.",
    "Do not correct grammar or add words.",
    "If articulation is nonstandard, preserve the closest phonetic Greek text for clinician review.",
    "Keep the child's wording for clinical review.",
  ].join(" ");
  form.append("prompt", prompt);

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: {
      authorization: `Bearer ${openAiApiKey}`,
    },
    body: form,
  });

  const raw = await upstream.text();
  if (!upstream.ok) {
    throw new Error(raw || `OpenAI transcription failed with HTTP ${upstream.status}.`);
  }

  let payload = {};
  try {
    payload = raw ? JSON.parse(raw) : {};
  } catch {
    payload = { text: raw };
  }

  return {
    text: String(payload.text || "").trim(),
    confidence: payload.confidence ?? null,
    alternatives: [],
    engine: model,
    provider: "OpenAI Audio Transcriptions API",
  };
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, {
      ok: true,
      engine: model,
      apiKeyConfigured: Boolean(openAiApiKey),
    });
    return;
  }

  if (request.method !== "POST" || request.url !== "/api/asr") {
    sendJson(response, 404, { error: "Not found" });
    return;
  }

  try {
    const contentType = request.headers["content-type"] || "";
    const body = await collectRequest(request);
    const parsed = parseMultipart(body, contentType);
    const transcript = await transcribeWithOpenAI(parsed);
    if (!transcript.text) throw new Error("The ASR model returned an empty transcript.");
    sendJson(response, 200, transcript);
  } catch (error) {
    sendJson(response, 500, {
      error: error?.message || "ASR server error.",
      engine: model,
    });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`ASR server listening on http://127.0.0.1:${port}/api/asr`);
  console.log(`ASR model: ${model}`);
});
