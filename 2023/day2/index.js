console.log("Day 2");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  console.log("Instruction length =", array.length);
  let counter = 0;
  for (const line of array) {
    let validGame = true;
    let game = parseInt(line.match(/\d{1,3}:/));
    const turns = line.split(":")[1].split(";");
    for (const turn of turns) {
      let redVal = 0;
      let blueVal = 0;
      let greenVal = 0;
      let red = turn.match(/\d{0,3} red/);
      let green = turn.match(/\d{0,3} green/);
      let blue = turn.match(/\d{0,3} blue/);
      if (red != null) {
        redVal = parseInt(red[0]);
      }
      if (blue != null) {
        blueVal = parseInt(blue[0]);
      }
      if (green != null) {
        greenVal = parseInt(green[0]);
      }
      if (redVal > 12 || blueVal > 14 || greenVal > 13) {
        validGame = false;
        break;
      }
    }
    if (validGame) {
      counter += game;
    }
  }
  console.log(counter);
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
