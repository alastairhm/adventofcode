console.log("2015 Day 6");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function newArray(x,y,v){
  let myArray = Array.from(Array(x), () => new Array(y));
  for (let i=0; i<x; i++){
    for (let j=0; j<y; j++){
      myArray[i][j] = v;
    }
  }
  return myArray;
}

function lit(array){
  let sum = 0;
  array.forEach((row) => {
    row.forEach((element) => {
      sum += element;
    });
  });
 return sum;
}

function parse(array, instruction){
  console.log(instruction);
  const rect = coords(instruction);
  if (instruction.includes("toggle")) {
    console.log('Toggle');
  } else if (instruction.includes("on")) {
    console.log('On');
  } else {
    console.log("Off");
  }
  return array;
}

function coords(instruction){
  return instruction.match(/[0-9]{1,3}/g);
}

function process(array){
  console.log('Instruction length =',array.length);
  let lights = newArray(1000,1000,0);
  for (const line of array){
    lights = parse(lights, line);
  }
  console.log('Number of lit lights',lit(lights));
}

const filename = ["test.txt"];

for ( const current of filename){
    const array = tools.readData(path.join(__dirname,current));
    process(array);
}
