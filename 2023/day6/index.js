console.log("Day X");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array) {
  console.log("Instruction length =", array.length);
  let time = array[0]
    .split(":")[1]
    .split(" ")
    .filter(function (item) {
      return item !== "";
    });
  let distance = array[1]
    .split(":")[1]
    .split(" ")
    .filter(function (item) {
      return item !== "";
    });
  console.log(time);
  console.log(distance);
  let total = 1;
  for (let race = 0; race < time.length; race++) {
    let beaten = [];
    let raceTime = parseInt(time[race]);
    let record = parseInt(distance[race]);
    let runDist = 0;
    for (let run = 0; run < raceTime; run++) {
      let speed = run * 1;
      runDist = (raceTime - run) * speed;
      if (runDist > record) {
        beaten.push(run);
      }
    }
    total *= beaten.length;
  }
  console.log(total);
}

const filename = ["test.txt", "input.txt", "input2.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
