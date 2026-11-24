import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out until Monday. Dave is covering my inbox \u2014 he's eaten two invoices, jammed twice, and just so you know, Dave is the printer.";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 140 || !entry.trim()) {
  throw new Error(`Entry must be 1-140 non-blank characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line");
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
