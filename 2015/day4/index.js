console.log("2015 Day 4");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function process(array, prefix) {
  for (const line of array) {
    console.log(line);
    let sliced = "fffff";
    let counter = 0;
    while (sliced != prefix) {
      const data = line + counter;
      const hash = crypto.createHash("md5");
      hash.update(data);
      const hex = hash.digest("hex");
      sliced = hex.slice(0, prefix.length);
      counter++;
    }
    console.log(counter - 1);
  }
}

const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array, "00000");
  process(array, "000000");
}
