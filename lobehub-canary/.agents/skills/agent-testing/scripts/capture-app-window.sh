#!/usr/bin/env bash
# capture-app-window.sh - Capture screenshot of a specific app window
set -euo pipefail
PROCESS="${1}"
OUTPUT="${2}"
WINDOW_ID=$(TARGET_PROCESS="$PROCESS" swift -e '
import Cocoa
let target = ProcessInfo.processInfo.environment["TARGET_PROCESS"] ?? ""
let windowList = CGWindowListCopyWindowInfo([.optionAll], kCGNullWindowID) as! [[String: Any]]
for w in windowList {
    let owner = w["kCGWindowOwnerName"] as? String ?? ""
    let layer = w["kCGWindowLayer"] as? Int ?? -1
    if owner == target && layer == 0 { print(w["kCGWindowNumber"] as? Int ?? 0); break }
}
' 2>/dev/null || true)
if [ -n "$WINDOW_ID" ]; then
  screencapture -l "$WINDOW_ID" -x "$OUTPUT"
else
  screencapture -x "$OUTPUT"
fi