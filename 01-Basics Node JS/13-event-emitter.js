const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received User Name: ${name} with ID : ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logics`);
});

customEmitter.emit("response", "Avilash Bhowmik", 3);
