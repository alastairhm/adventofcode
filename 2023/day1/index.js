console.log("Day 1");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  let calSum = 0;
  console.log("Instruction length =", array.length);
  for (const line of array) {
    let numbers = line.match(/\d/g);
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let code = parseInt(first + last);
    calSum += code;
  }
  console.log("calibration sum :", calSum);
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
