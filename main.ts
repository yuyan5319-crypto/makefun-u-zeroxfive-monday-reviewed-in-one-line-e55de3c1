// Monday, Reviewed in One Line — make.fun entry.
//
// Writes a single one-line review of the entrant's own Monday to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: no input, no network, no randomness — the same line
// every run, 152 characters, well under the 200-character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const REVIEW =
  "Monday review: my alarm called in sick, my inbox had triplets overnight, and the 9 a.m. standup outlasted my will to live — two stars, would not relive.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, REVIEW + "\n", "utf8");
console.log(REVIEW);
