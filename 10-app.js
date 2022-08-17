const { createReadStream } = require("fs");
const stream = createReadStream("./content/jersey.txt");
stream.on("data", (result) => {
  console.log(result);
});
