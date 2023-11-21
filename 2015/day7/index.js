console.log("2015 Day 7");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseSource(source,myMap){
  let result =0;
  if (source.search(/^[0-9]{1,5}/) == 0){
    result = Number(source);
  } else if (source.includes("AND")) {
    const connections = source.match(/[a-z]{1,3}/g);
    result = myMap.get(connections[0]) & myMap.get(connections[1]);
  } else if (source.includes("OR")) {
    const connections = source.match(/[a-z]{1,3}/g);
    result = myMap.get(connections[0]) | myMap.get(connections[1]);
  } else if (source.includes("NOT")) {
    const connections = source.match(/[a-z]{1,3}/g);
    result = ~ myMap.get(connections[0]);
  } else if (source.includes("LSHIFT")) {
    const connections = source.match(/[a-z]{1,3}/g);
    const shift = source.match(/[0-9]{1,3}/g);
    console.log('LS',connections,shift);
  } else if (source.includes("RSHIFT")) {
    const connections = source.match(/[a-z]{1,3}/g);
    const shift = source.match(/[0-9]{1,3}/g);
    console.log('RS',connections,shift);
  } 
  return result;
}

function process(array){
  console.log('Instruction length =',array.length);
  let wires = new Map();
  for (const line of array){
    let source = line.substring(0,line.indexOf("->"));
    let destination = line.substring(line.indexOf("->")+3);
    wires.set(destination, parseSource(source,wires));
  }
  for (let element of wires){
    console.log(element[0],element[1]);
  }
}

const filename = ["test.txt"];
//const filename = ["input.txt"];

for ( const current of filename){
    const array = tools.readData(path.join(__dirname,current));
    process(array);
}

