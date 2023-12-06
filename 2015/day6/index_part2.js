console.log("2015 Day 6");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function newArray(x, y, v) {
  let myArray = new Array(x);
  for (let i = 0; i < x; i++) {
    myArray[i] = new Array(y);
  }

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      myArray[i][j] = v;
    }
  }
  return myArray;
}

function lit(array) {
  let sum = 0;
  array.forEach((row) => {
    row.forEach((element) => {
      sum += element;
    });
  });
  return sum;
}

function parse(array, instruction) {
  // console.log(instruction);
  const rect = coords(instruction);
  if (instruction.includes("toggle")) {
    array = update(array, rect, toggle);
  } else if (instruction.includes("on")) {
    array = update(array, rect, on);
  } else {
    array = update(array, rect, off);
  }
  return array;
}

function update(array, coords, action) {
  // console.log(coords);
  const x1 = Number(coords[0]);
  const y1 = Number(coords[1]);
  const x2 = Number(coords[2]);
  const y2 = Number(coords[3]);
  // console.log(x1,y1,x2,y2);
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      array[x][y] = action(array[x][y]);
    }
  }
  return array;
}

function on(value) {
  // console.log('On', value);
  return value + 1;
}

function off(value) {
  // console.log('Off', value);
  let newV = value - 1;
  if (newV < 0) {
    newV = 0;
  }
  return newV;
}

function toggle(value) {
  // console.log('Toggle', value);
  return value + 2;
}

function coords(instruction) {
  return instruction.match(/[0-9]{1,3}/g);
}

function process(array) {
  console.log("Instruction length =", array.length);
  let lights = newArray(1000, 1000, 0);
  for (const line of array) {
    if (line.length > 0) {
      lights = parse(lights, line);
    }
  }
  console.log("Number of lit lights", lit(lights));
}

//const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
