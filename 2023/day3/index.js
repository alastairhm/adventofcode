console.log("Day 3")

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDigit = char => /[0-9]/.test(char);
const isSymbol = char => char !== '.' && !isDigit(char);

function process(array){
  let digits = new Map();
  console.log('Instruction length =',array.length);
  for (let line=0; line<array.length; line++){
    let digit = false;
    for (let char=0; char<array[line].length; char++){
      const check = array[line];
      const cc = check.substring(char,char+1);
      if (isDigit(check) && !digit){
        console.log(".");
        digit = true;
        digits.set(line.toString+","+char.toString,"Start");
      }
      if (isSymbol(check)){
        digit = false;
        digits.set(line.toString+","+char.toString,"End");
      }
    }
  }
}

const filename = ["test.txt"];//,"input.txt"];

for ( const current of filename){
    const array = tools.readData(path.join(__dirname,current));
    process(array);
}
