FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 ASR_HOST=0.0.0.0 ASR_PORT=8787 ASR_CACHE_DIR=/models
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg libgomp1 && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY server/requirements.txt /app/server/requirements.txt
RUN pip install --no-cache-dir -r /app/server/requirements.txt
COPY . /app
RUN rm -rf /app/server/__pycache__ /app/server/.models
EXPOSE 8787
CMD ["python", "server/whisper_server.py"]
