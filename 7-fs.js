// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/fil.txt", "utf-8");

// writeFileSync("./content/adi.txt", `Here is the result ${first}`, {
//   flag: "a",
// });

// const { readFile, writeFile } = require("fs");

// readFile("./content/adi.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;

//   readFile("./content/adi1.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/hello.txt",
//       `here is the result ${first} ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         // console.log(result);
//       }
//     );
//   });
// });

// const { readFile, writeFile } = require("fs");

// readFile("./content/adi.txt", "utf-8", err);

const { readFile, writeFile } = require("fs");

readFile("./content/adi.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/adi1.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/kanha.txt",
      `here is the key : ${first} ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
});
