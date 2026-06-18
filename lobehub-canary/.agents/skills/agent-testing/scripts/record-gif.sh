#!/usr/bin/env bash
# record-gif.sh - capture frame sequence via CDP and synthesize GIF
set -euo pipefail
OUT="${1}"
DUR="${2}"
FPS="${3:-2}"
# Captures frames at interval, assembles with ffmpeg into animated GIF