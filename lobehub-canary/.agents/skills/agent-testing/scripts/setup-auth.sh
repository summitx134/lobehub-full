#!/usr/bin/env bash
# setup-auth.sh - one-stop auth setup & check for local agent testing
set -euo pipefail
SERVER_URL="${SERVER_URL:-http://localhost:3010}"
# Handles: status, cli login, web cookie injection, web-verify