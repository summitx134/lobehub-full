// Extract unique normalized chat-model ids from model-bank
import { readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
const dir = resolve('packages/model-bank/src/aiModels');
const out = process.argv[2] || '/tmp/model-ids.json';
const ids = new Set<string>();
for (const f of readdirSync(dir).filter(f => f.endsWith('.ts'))) {
  const mod = await import(join(dir, f));
  for (const m of mod.default || []) {
    if (!m?.id || m.type !== 'chat') continue;
    ids.add(m.id.split('/').pop()!.toLowerCase());
  }
}
writeFileSync(out, JSON.stringify([...ids].sort(), null, 1));