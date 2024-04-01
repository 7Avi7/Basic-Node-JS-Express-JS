const express = require("express");

const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

//  Static Assets
app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

// Parse Json
app.use(express.json());

app.use("/api/people", people);

app.use("/login", auth);

// Post Method from another source

// 404
// app.all("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
