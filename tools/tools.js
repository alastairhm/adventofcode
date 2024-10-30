module.exports = {
readData: function (filename) {
  console.log("Reading data:", filename);
  const fs = require("fs");

  try {
    const data = fs.readFileSync(filename, "utf-8").toString().split("\n");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}  
};
