console.log("Day 1");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  console.log("Instruction length =", array.length);
  const left = [];
  const right = [];
  for (const line of array) {
    const lists = line.split("   ");
    left.push(lists[0]);
    right.push(lists[1]);
  }
  left.sort();
  right.sort();
  let score = 0;
  for (let i=0; i<array.length; i++){
    let count = 0;
    for (let j=0; j<array.length; j++){
      if (left[i] == right[j]) {
        count++;
      }
    }
    score += left[i] * count;
  }
  console.log('Score, ',score)
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
