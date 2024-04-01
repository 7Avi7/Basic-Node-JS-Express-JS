const express = require("express");

const app = express();

let { people } = require("./data");
let data = [];

//  Static Assets
app.use(express.static("./methods-public"));

// Parse From Data
app.use(express.urlencoded({ extended: false }));

// Parse Json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  // res.status(201).send("Success");
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// app.post("/api/postman/people", (req, res) => {
//   // res.status(201).send("Success");
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" });
//   }
//   res.status(201).json({ success: true, data: [...people, name] });
// });

// Post Method from another source

app.post("/api/postman/people", (req, res) => {
  const { id, name } = req.body;

  // Check if both id and name are provided
  if (!id || !name) {
    return res
      .status(400)
      .json({ success: false, msg: "Both id and name are required." });
  }

  // Check if ID is already in use
  if (data.find((entry) => entry.id === id)) {
    return res.status(400).json({ success: false, msg: "ID already exists." });
  }

  // Add the new entry to the data array
  data.push({ id, name });

  // Return success response
  res.status(201).json({ success: true, data: { id, name } });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  // res.send("hello world");

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with ID: ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

// app.delete("/api/people/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` });
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   return res.status(200).json({ success: true, data: newPeople });
// });

// Delete Method from another Source

app.delete("/api/people/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Check if the provided ID is a valid number
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ success: false, msg: "Invalid ID format. ID must be a number." });
  }

  // Find the person with the provided ID
  const index = people.findIndex((person) => person.id === id);

  // If person not found, return 404 error
  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, msg: `No person found with ID ${id}` });
  }

  // Remove the person from the array
  people.splice(index, 1);

  // Return success response with updated people array
  return res
    .status(200)
    .json({ success: true, msg: "Person deleted successfully", data: people });
});

// 404
// app.all("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
