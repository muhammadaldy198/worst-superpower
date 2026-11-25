import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// One line, 92 characters: the fastest queue-skip that goes nowhere.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "I can skip any queue in 0.4 seconds, but only the one I am already standing at the front of.";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
