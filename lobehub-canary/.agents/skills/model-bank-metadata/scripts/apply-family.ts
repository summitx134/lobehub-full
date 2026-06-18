// Apply family/generation annotations to model-bank entries
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const map: Record<string, { family: string; generation?: string }> = JSON.parse(readFileSync('/tmp/family-map.json', 'utf8'));
const dir = 'packages/model-bank/src/aiModels';
// Parse model blocks, insert family/generation annotations for chat models