console.log("Day 4");


import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array){
  console.log('Instruction length =',array.length);
  let points=0;
  for (const line of array){
    let tickets = line.split(":")[1].split("|");
    tickets[0] = tickets[0].trim().split(" ").filter(function(item) { return item !== ''});
    tickets[1] = tickets[1].trim().split(" ").filter(function(item) { return item !== ''});
    let count = 0;
    console.log(tickets[0]);
    console.log(tickets[1]);
    for (const win of tickets[0]){
      if (win,tickets[1].includes(win)){
        console.log(win);
        count++;
      }
    }
    if (count >0) {
      //console.log("Winners",line.split(":")[0],count,2**(count-1));
      points += 2 ** (count-1);
    }
  }
  console.log("Points",points);
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for ( const current of filename){
    const array = tools.readData(path.join(__dirname,current));
    process(array);
}
