const express = require("express");

const app = express();

const morgan = require("morgan");

const logger = require("./logger");
const authorize = require("./authorize");

// logger for all
// app.use([authorize, logger]);
// logger for particular route

// app.use("/api", logger);

// How Much Time It Takes
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.use(logger);
app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

// 404
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
