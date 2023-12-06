console.log("2015 Day 1");

const tools = require("../../tools/tools");

floor = 0;
array = tools.readData(__dirname + "/input.txt");

for (const line of array) {
  for (const char of line) {
    if (char == "(") {
      floor += 1;
    } else {
      floor -= 1;
    }
  }
  console.log("Delivery floor = ", floor);
}

floor = 0;
position = 1;
basement = 0;
for (const line of array) {
  for (const char of line) {
    if (char == "(") {
      floor += 1;
    } else {
      floor -= 1;
    }
    if (floor < 0) {
      basement = position;
      break;
    } else {
      position++;
    }
  }
  console.log("Position = ", position);
}
