console.log("2015 Day 5");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array){
  let nicey = 0;
  let naughty = 0;
  const subStrings = ['ab','cd','pq','xy']
    for (const line of array){
      let nice = vowels(line) >= 3;
      nice = nice && hasDoubleLetters(line);
      for (let i=0; i<subStrings.length; i++){
        nice = nice && !line.includes(subStrings[i]);
      }
      if (nice) {
        nicey +=1;
      } else {
        naughty +=1;
      }
    }
  console.log('Nice =',nicey);
  console.log('Naughty =',naughty);
}

function hasDoubleLetters(str) {
  return /([a-zA-Z])\1/.test(str);
}

function vowels(word){
  let m = word.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

const filename = ["input.txt"];

for ( const current of filename){
    const array = tools.readData(path.join(__dirname,current));
    process(array);
}
