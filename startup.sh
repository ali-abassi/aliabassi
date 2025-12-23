#!/usr/bin/env bash
set -euo pipefail

# Simple dev bootstrap for this repo (Next.js).
# Usage:
#   ./startup.sh
#   ./startup.sh --no-install
#
# Optional env:
#   PORT=3000 ./startup.sh

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

NO_INSTALL=false
for arg in "$@"; do
  case "$arg" in
    --no-install) NO_INSTALL=true ;;
    *)
      echo "Unknown arg: $arg"
      echo "Usage: ./startup.sh [--no-install]"
      exit 1
      ;;
  esac
done

if ! command -v node >/dev/null 2>&1; then
  echo "node is not installed. Install Node.js first."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed (it usually ships with Node)."
  exit 1
fi

PM="npm"
if [[ -f "pnpm-lock.yaml" ]] && command -v pnpm >/dev/null 2>&1; then
  PM="pnpm"
elif [[ -f "yarn.lock" ]] && command -v yarn >/dev/null 2>&1; then
  PM="yarn"
fi

if [[ "$NO_INSTALL" == "false" ]]; then
  if [[ ! -d "node_modules" ]]; then
    echo "Installing dependencies with $PM…"
    case "$PM" in
      pnpm) pnpm install ;;
      yarn) yarn install ;;
      npm) npm install ;;
    esac
  fi
fi

PORT="${PORT:-3000}"
echo "Starting dev server on http://localhost:${PORT} …"
echo "Press Ctrl+C to stop."

case "$PM" in
  pnpm) PORT="$PORT" pnpm dev ;;
  yarn) PORT="$PORT" yarn dev ;;
  npm)  PORT="$PORT" npm run dev ;;
esac


