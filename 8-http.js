const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end("Hello Aditya ,Welcome to the homepage");
  } else {
    res.end(`<h1>OOps you have visited the wrong page<h1/>
    <a href="/home">Hello visit this link </a>
    `);
  }
});

server.listen(8000); // on which server the program will run
