#!/usr/bin/env bash
# test-discord-bot.sh - Send message to Discord bot and capture response
set -euo pipefail
CHANNEL="${1}"
MESSAGE="${2}"
APP="Discord"
osascript -e "tell application \"$APP\" to activate"