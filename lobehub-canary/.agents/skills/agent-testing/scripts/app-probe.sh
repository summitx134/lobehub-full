#!/usr/bin/env bash
# app-probe.sh - standardized probes for running LobeHub app (Electron CDP or web session)
# Usage: app-probe.sh {auth|route|ops|goto <path>|errors-install|errors}
set -euo pipefail
AB_TARGET="${AB_TARGET:---cdp ${CDP_PORT:-9222}}"
run_eval() { agent-browser $AB_TARGET eval --stdin; }
case "${1:-}" in
  auth) run_eval << 'EVALEOF'
(function(){var s=window.__LOBE_STORES;if(!s||!s.user)return JSON.stringify({ok:false,reason:'no user store'});var u=s.user();return JSON.stringify({ok:!!u.isSignedIn,isSignedIn:!!u.isSignedIn,userId:(u.user&&u.user.id)||null});})()
EVALEOF ;;
  route) run_eval << 'EVALEOF'
location.pathname+location.search+location.hash
EVALEOF ;;
  *) echo "Usage: $0 {auth|route|ops|goto <path>|errors-install|errors}" >&2; exit 2 ;;
esac