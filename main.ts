import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line roasting a gadget used every day: the smartwatch that
// treats standing up like a sporting achievement, then snitches on you
// for sitting back down.
const roast =
  "My smartwatch throws me a party for standing up, then files a complaint when I sit back down thirty seconds later.";

// The gate requires one line of 1-200 UTF-8 characters, not only whitespace.
if (
  roast.length < 1 ||
  roast.length > 200 ||
  roast.includes("\n") ||
  roast.trim().length === 0
) {
  throw new Error(
    "roast violates the entry gate: must be one line of 1-200 characters",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
