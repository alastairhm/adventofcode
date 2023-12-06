console.log("2015 Day 3");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";
import victor from "victor";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function move(position, instruction) {
  // console.log(instruction);
  if (instruction == ">") {
    position.addX(victor(1, 0));
  } else if (instruction == "<") {
    position.subtractX(victor(1, 0));
  } else if (instruction == "^") {
    position.addY(victor(0, 1));
  } else if (instruction == "v") {
    position.subtractY(victor(0, 1));
  }
  return position;
}

function updateMap(map, position) {
  const mapPos = position.toString();
  let newValue = 1;
  if (map.has(mapPos)) {
    newValue = map.get(mapPos) + 1;
  }
  map.set(mapPos, newValue);
  return map;
}

function process(array) {
  for (const line of array) {
    let map = new Map();
    let santa = victor(0, 0);
    let robot = victor(0, 0);
    map = updateMap(map, santa);
    map = updateMap(map, robot);

    for (let i = 0; i < line.length; i = i + 2) {
      let char = line[i];
      santa = move(santa, char);
      map = updateMap(map, santa);
      // console.log(santa);
      char = line[i + 1];
      robot = move(robot, char);
      // console.log(robot);
      map = updateMap(map, robot);
    }
    console.log("Visits :", map.size);
  }
}

const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
