#!/usr/bin/env bash
# record-app-screen.sh - Record Electron app window via CDP screenshots
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
RECORDS_DIR="$PROJECT_DIR/.records"
CDP_PORT="${CDP_PORT:-9222}"
# Full script omitted for brevity - handles start/stop/status of CDP-based recording