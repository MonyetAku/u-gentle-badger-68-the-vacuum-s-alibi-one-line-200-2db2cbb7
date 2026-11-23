import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vacuum's alibi: a deadpan machine excuse for missing a spot.
// Smug about its sensors, specific about the dust, punch at the end.
const ENTRY =
  "I did not miss that spot. My sensors classified it as a load-bearing dust bunny and left it in place for structural reasons.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  process.exit(1);
}

if (ENTRY.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

console.log(`entry: ${ENTRY.length} characters`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
