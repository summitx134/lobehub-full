// Run N round-trip tab switches with event markers timed against the probe.
// Requires probe.js installed first (provides __PROBE_EVENT / __listTabs / __clickTabByKey / __activeTabKey).
(function () {
  const ROUND_TRIPS = 4;
  const DWELL_MS = 10_000;
  if (!window.__PROBE_EVENT || !window.__listTabs || !window.__clickTabByKey) return 'probe not installed';
  if (window.__SWITCH_LOOP_RUNNING) return 'switch loop already running';
  const tabs = window.__listTabs();
  const activeTab = tabs.find((t) => t.active);
  if (!activeTab) return 'no active tab';
  const inactives = tabs.filter((t) => !t.active);
  if (inactives.length === 0) return 'no inactive tab';
  const awayTab = inactives.at(-1);
  const BACK_KEY = activeTab.key;
  const AWAY_KEY = awayTab.key;
  window.__SWITCH_LOOP_RUNNING = true;
  window.__PROBE_EVENT('SWITCH_LOOP_CONFIG:back=' + BACK_KEY + ',away=' + AWAY_KEY);
  (async function () {
    function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
    try {
      window.__PROBE_EVENT('SWITCH_LOOP_START');
      for (let i = 1; i <= ROUND_TRIPS; i++) {
        window.__PROBE_EVENT('AWAY_' + i);
        window.__clickTabByKey(AWAY_KEY);
        await sleep(DWELL_MS);
        window.__PROBE_EVENT('BACK_' + i);
        window.__clickTabByKey(BACK_KEY);
        await sleep(DWELL_MS);
      }
      window.__PROBE_EVENT('SWITCH_LOOP_DONE');
    } finally { window.__SWITCH_LOOP_RUNNING = false; }
  })();
  return 'switch loop kicked off';
})();