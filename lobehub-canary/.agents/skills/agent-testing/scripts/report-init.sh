#!/usr/bin/env bash
# report-init.sh - scaffold a structured test report under .records/reports/
set -euo pipefail
SLUG="${1}"
TITLE="${2:-$SLUG}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
TS="$(date +%Y%m%d-%H%M%S)"
DIR="$REPO_ROOT/.records/reports/$TS-$SLUG"
mkdir -p "$DIR/assets"
# Creates report.md and result.json scaffolds