const { createReadStream } = require("fs");
const stream = createReadStream("./content/bigData.txt");
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log("what the fuck where is this error coming from");
});
