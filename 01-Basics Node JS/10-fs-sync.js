const { readFileSync, writeFileSync } = require("fs");

console.log("start With Sync");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the file of Sync Write : ${first}, ${second}`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("Starting the next one");
