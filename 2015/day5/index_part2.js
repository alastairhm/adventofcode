console.log("2015 Day 5 Part 2");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  let nice = 0;
  let naughty = 0;
  for (const line of array) {
    const pairs = line.search(/(..).*\1/) >= 0;
    const reps = line.search(/(.).\1/) >= 0;
    if (pairs && reps) {
      nice += 1;
    } else {
      naughty += 1;
    }
  }
  console.log("Nice =", nice);
  console.log("Naughty =", naughty);
}

const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
