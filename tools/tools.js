module.exports = {
  readData: function (filename) {
    console.log("Reading data :", filename);
    const fs = require("fs");
    const array = fs.readFileSync(filename, "utf-8").toString().split("\n");
    return array;
  },
};
