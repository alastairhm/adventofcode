console.log("Day 1");

import path, { parse } from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseLevels(array){
  for (let i=0 ; i<array.length-1 ; i++){
    const change = Math.abs(array[i] - array[i+1]);
    if(change  >3 || change == 0) {
      // console.log("Gap", array[i],array[i+1], change, array)
      return 0
    }
  }
  let down = false;
  let up = false;
  for (let i=0 ; i<array.length-1 ; i++){
    if (parseInt(array[i]) > parseInt(array[i+1])){
      down = true;
    }
    if (parseInt(array[i]) < parseInt(array[i+1])){
      up = true;
    }
    // console.log(i,array[i],array[i+1],down,up);
  }
  if (up && down){
    // console.log("Direction",array)
    return 0
  }
  return 1
}

function process(array) {
  console.log("Instruction length =", array.length);
  let safe = 0;
  for (const line of array){
    const levels = line.split(" ");
    const result = parseLevels(levels);
    safe += result;
    // console.log(safe, result);
  }
  console.log("Safe : ",safe);
}

// const filename = ["test2.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
