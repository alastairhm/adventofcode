console.log("2015 Day 3");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";
import victor from "victor";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  const map = new Map();
  var position = victor(0, 0);
  map.set(position.toString(), 1);

  // console.log(map, position);
  for (const line of array) {
    for (const char of line) {
      if (char == ">") {
        position.addX(victor(1, 0));
      } else if (char == "<") {
        position.subtractX(victor(1, 0));
      } else if (char == "^") {
        position.addY(victor(0, 1));
      } else if (char == "v") {
        position.subtractY(victor(0, 1));
      }
      const mapPos = position.toString();
      let newValue = 1;
      if (map.has(mapPos)) {
        newValue = map.get(mapPos) + 1;
      }
      map.set(mapPos, newValue);
      // console.log(map, position);
    }
  }
  return map;
}

const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  const map = process(array);
  console.log(map.size);
}
