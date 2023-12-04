console.log("Day 2");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";
import { count } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  console.log("Instruction length =", array.length);
  let counter = 0;
  for (const line of array){
    let validGame = true;
    let maxRed = 0;
    let maxBlue = 0;
    let maxGreen = 0;
    let power = 0;
    let game = parseInt(line.match(/\d{1,3}:/));
    const turns = line.split(":")[1].split(";");
    for (const turn of turns){
      let redVal = 0;
      let blueVal =0;
      let greenVal =0;
      let red = turn.match(/\d{0,3} red/);
      let green = turn.match(/\d{0,3} green/);
      let blue = turn.match(/\d{0,3} blue/);
      if (red != null){
        redVal = parseInt(red[0]);
      }
      if (blue != null){
        blueVal = parseInt(blue[0]);
      }
      if (green != null){
        greenVal = parseInt(green[0]);
      }
      if (maxRed < redVal) {maxRed = redVal};
      if (maxBlue < blueVal) {maxBlue = blueVal};
      if (maxGreen < greenVal) {maxGreen = greenVal};
    }
    power = maxRed * maxBlue * maxGreen;
    console.log(maxRed,maxBlue,maxGreen,power);
    counter += power;
  }
  console.log(counter);
}

// const filename = ["test2.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
