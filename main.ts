import { mkdirSync, writeFileSync } from "node:fs";

const setup = "You're asking Siri where your phone is. I'm in your hand.";
const punch = " At 1%, I die of secondhand embarrassment.";
const line = setup + punch;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
