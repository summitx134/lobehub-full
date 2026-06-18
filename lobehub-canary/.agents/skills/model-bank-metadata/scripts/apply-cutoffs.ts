// One-off codemod: apply knowledgeCutoff map onto model-bank entries
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const mapPath = process.argv[2];
const map: Record<string, string> = JSON.parse(readFileSync(mapPath, 'utf8'));
const dir = 'packages/model-bank/src/aiModels';
let inserted = 0, touchedFiles = 0;
for (const file of readdirSync(dir).filter(f => f.endsWith('.ts'))) {
  const lines = readFileSync(join(dir, file), 'utf8').split('\n');
  // Parse model blocks, insert knowledgeCutoff after id: line for chat models
}
console.log(`inserted ${inserted} knowledgeCutoff fields across ${touchedFiles} files`);