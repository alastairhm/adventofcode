console.log("Day 1 Part 2");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function reverseString(input) {
  let charArray = input.split("");
  charArray.reverse();
  return charArray.join("");
}

function parseNumber(number) {
  switch (number) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return number;
  }
}

function process(array) {
  let calSum = 0;
  console.log("Instruction length =", array.length);
  for (const line of array) {
    let firstNumber = line.match(
      /\d|one|two|three|four|five|six|seven|eight|nine/,
    );
    let LastNumber = reverseString(line).match(
      /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/,
    );
    let first = parseNumber(firstNumber[0]);
    let last = parseNumber(reverseString(LastNumber[0]));
    let code = parseInt(first + last);
    calSum += code;
  }
  console.log("calibration sum :", calSum);
}

// const filename = ["test2.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
