#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# deploy.sh — Build and deploy vee12.com to production
# Usage: ./deploy.sh [--skip-build]
# ---------------------------------------------------------------------------

REMOTE_USER="root"
REMOTE_HOST="jonin1.root"
REMOTE_PATH="/opt/tacticalao.com/www/public_html/vee12.com"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DIST_DIR="${PROJECT_ROOT}/dist"

# Parse arguments
SKIP_BUILD=false
for arg in "$@"; do
  [[ "$arg" == "--skip-build" ]] && SKIP_BUILD=true
done

# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------
if [[ "$SKIP_BUILD" == false ]]; then
  echo "Building..."
  pnpm build
  echo ""
fi

# Verify dist/ exists and is non-empty
if [[ ! -d "$DIST_DIR" ]] || [[ -z "$(ls -A "$DIST_DIR")" ]]; then
  echo "Error: dist/ is missing or empty. Run pnpm build first."
  exit 1
fi

# ---------------------------------------------------------------------------
# Confirm before deploying
# ---------------------------------------------------------------------------
echo "Deploying to: ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
echo ""
read -rp "Proceed? [y/N] " confirm
[[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }
echo ""

# ---------------------------------------------------------------------------
# Deploy via rsync over SSH
# SSH will prompt for your key passphrase automatically.
# ---------------------------------------------------------------------------
rsync -avz --delete \
  "${DIST_DIR}/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo ""
echo "Done. https://vee12.com is live."
