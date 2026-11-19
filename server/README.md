# Local Whisper ASR

Προεπιλογή: `whisper_server.py`, Whisper large-v3 / faster-whisper 1.2.1.
Διπλό κλικ στο `../Εκκίνηση Whisper.command` ή ακολούθησε το `../ASR_ENDPOINT.md`.
Η εφαρμογή και το ASR εξυπηρετούνται στο http://127.0.0.1:8787.
Το /health δηλώνει ready μόνο μετά τη φόρτωση του πραγματικού μοντέλου.
Δεν χρειάζεται κλειδί API. Δεν αποθηκεύονται ηχογραφήσεις στον server.

Το `openai-asr-server.mjs` είναι ο προηγούμενος, προαιρετικός API proxy.
Η εντολή `npm start` εκκινεί αυτόν τον proxy και απαιτεί OPENAI_API_KEY,
όχι τον νέο τοπικό Whisper. Μην εκκινείς και τους δύο στην ίδια θύρα.
