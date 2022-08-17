const eventEmiter = require("events");
const custom = new eventEmiter();
custom.on("scream", console.log(`hey Aditya this side ${name} ${age}`), {
  flag: "a",
});
custom.emit("scream", "Aditya", 18);
