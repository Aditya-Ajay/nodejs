// const http = require("http");
// // const { readFileSync } = require("fs");
// const { createReadStream } = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     const stream = createReadStream("./content/jersey.tx");
//     stream.on("open", () => {
//       stream.pipe(res);
//     });
//     stream.on("error", (err) => {
//       res.end("where is the error now");
//     });
//   } else {
//     res.end(`<h1>OOps you have visited the wrong page<h1/>
//     <a href="/home">Hello visit this link </a>
//     `);
//   }
// });

// server.listen(8000); // on which server the program will run

// const { http } = require("http");
// const { readFileSync } = require("fs");
// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     const result = readFileSync("./content/mom.txt");
//     res.end(result);
//   } else {
//     `<h1>OOPS YOU HAVE MADE AN ERROR</h1>`;
//   }
// });
// server.listen(8000);

// const http = require("http");
// const readFileSync = require("fs");
// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     const result = readFileSync("./content/mom.txt", "utf-8");
//     res.end(result);
//   } else {
//     res.end(`<h1>OOps you have visited the wrong page<h1/>
//     <a href="/home">Hello visit this link </a>
//     `);
//   }
// });

// server.listen(8000); // on which server the program will run
