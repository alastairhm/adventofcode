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
  // console.log("Left,", left);
  // console.log("Right,", right);
  let diff = 0;
  for (let i=0; i<array.length; i++){
    diff += Math.abs(left[i] - right[i]);
  }
  console.log("Total Distance :", diff)
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
