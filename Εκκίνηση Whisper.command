#!/bin/zsh
APP_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
for PYTHON_CANDIDATE in "$APP_DIR/server/.venv/bin/python" "$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3" /opt/homebrew/bin/python3 /usr/local/bin/python3 /usr/bin/python3; do
  if [[ -x "$PYTHON_CANDIDATE" ]]; then
    "$PYTHON_CANDIDATE" "$APP_DIR/server/start_whisper.py"
    RESULT=$?
    if [[ $RESULT -ne 0 ]]; then
      read -r "REPLY?Η εκκίνηση απέτυχε. Πάτησε Enter για κλείσιμο."
    fi
    exit $RESULT
  fi
done
print "Χρειάζεται εγκατάσταση Python 3.9 ή νεότερης."
read -r "REPLY?Πάτησε Enter για κλείσιμο."
