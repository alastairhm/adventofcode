console.log("2015 Day 2");

const tools = require("../../tools/tools");

function area(line) {
  dims = line.split("x");
  w = Number(dims[0]);
  l = Number(dims[1]);
  h = Number(dims[2]);
  const sides = [2 * l * w, 2 * w * h, 2 * h * l];
  let paper = 0;
  let smallest = Math.min(...sides) / 2;
  for (side of sides) {
    paper += side;
  }
  return paper + smallest;
}

function ribbon(line) {
  const dims = line.split("x");
  const numbers = dims.map(Number);
  const sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  const first = Number(sorted[0]);
  const second = Number(sorted[1]);
  const third = Number(sorted[2]);
  const length = first + first + second + second;
  const bow = first * second * third;
  return length + bow;
}

function process(array) {
  let total = 0;
  let ribbons = 0;
  for (line of array) {
    total += area(line);
    ribbons += ribbon(line);
  }
  console.log("Total Area =", total);
  console.log("Total Ribbon =", ribbons);
}

const filename = ["test.txt", "input.txt"];

for (file of filename) {
  const array = tools.readData(__dirname + "/" + file);
  process(array);
}
