// // const { createReadStream } = require("fs");
// // const stream = createReadStream("./content/bigData.txt");
// // stream.on("data", (result) => {
// //   console.log(result);
// // });
// // stream.on("error", (err) => {
// //   console.log("what the fuck where is this error coming from");
// // });

// // const { writeFileSync } = require("fs");

// // for (let i = 0; i < 10000; i++) {
// //   writeFileSync("./content/jersey.txt", `This is Aditya ${i}`, {
// //     flag: "a",
// //   });
// // }
// const { http } = require("http");
// const { readFileSync } = require("fs");
// // const server = http.createServer((req, res) => {
// //   if ((req.url = "/")) {
// //     const adi = readFileSync("./content/jersey.txt");
// //     res.end(adi);
// //   } else {
// //     res.end(`<h1>OOps you have visited the wrong page<h1/>
// //     <a href="/home">Hello visit this link </a>
// //     `);
// //   }
// // });
// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     res.end("Hello Aditya ,Welcome to the homepage");
//   } else {
//     res.end(`<h1>OOps you have visited the wrong page<h1/>
//       <a href="/home">Hello visit this link </a>
//       `);
//   }
// });
// server.listen(8000);

const http = require("http");
// const { readFileSync } = require("fs");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    const stream = createReadStream("./content/jersey.txt");
    stream.on("open", () => {
      stream.pipe(res);
      stream.on("error", () => {
        console.log("what the fuck what is the error");
      });
    });
  } else {
    res.end(`<h1>OOps you have visited the wrong page<h1/>
    <a href="/home">Hello visit this link </a>
    `);
  }
});

server.listen(8000); // on which server the program will run
