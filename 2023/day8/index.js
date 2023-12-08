console.log("Day 8");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseMap(myMap) {
  const parsedMap = new Map();
  for (const step of myMap) {
    let node = step.match(/[A-Z]{3}/g);
    parsedMap.set(node[0], { L: node[1], R: node[2] });
  }
  return parsedMap;
}

function process(array) {
  console.log("Instruction length =", array.length);
  const route = array[0];
  const myMap = parseMap(array.slice(2, array.length));
  let position = "AAA";
  let steps = 0;
  while (position != "ZZZ") {
    for (let i = 0; i < route.length; i++) {
      position = myMap.get(position)[route[i]];
      steps++;
      if (position == "ZZZ") {
        break;
      }
    }
  }
  console.log(steps);
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
