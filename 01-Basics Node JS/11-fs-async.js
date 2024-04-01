const { readFile, writeFile } = require("fs");

console.log("start async");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  console.log(first);

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      "./content/result-async.txt",
      `Here is the result of async: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting next task");

// const fs = require("fs");
// const writeFile = require("fs");

// // const readFile_ = fs.readFile();

// console.log("start async");

// fs.readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;

//   fs.readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     // writeFile(
//     //   "./content/result-async.txt",
//     //   `Here is the result of async: ${first}, ${second}`,
//     //   (err, result) => {
//     //     if (err) {
//     //       console.log(err);
//     //       return;
//     //     }
//     //     console.log("Done with this task");
//     //   }
//     // );
//   });
// });

// console.log("Starting next task");
