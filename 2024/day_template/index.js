console.log("Day 1");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  console.log("Instruction length =", array.length);
}

const filename = ["test.txt"];
//const filename = ["test.txt", "input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
