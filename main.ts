import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words at 1% — one line, exactly as submitted, no trailing newline.
// The program writes only to /output/entry.txt (the grader's output dir);
// it never writes a relative entry.txt, so it cannot throw in a read-only sandbox.
const line = "You charged me to 3%. You called it enough. I lasted nine hours on spite alone. Now I die judging you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
