const express = require("express");
const router = express.Router();
let { people } = require("../data");
let data = [];

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// Technique 1 for controllers
router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

// Technique 2 for controllers
// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

// Post Method from another source

// router.post("/api/postman/people", (req, res) => {
//   const { id, name } = req.body;

//   // Check if both id and name are provided
//   if (!id || !name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Both id and name are required." });
//   }

//   // Check if ID is already in use
//   if (data.find((entry) => entry.id === id)) {
//     return res.status(400).json({ success: false, msg: "ID already exists." });
//   }

//   // Add the new entry to the data array
//   data.push({ id, name });

//   // Return success response
//   res.status(201).json({ success: true, data: { id, name } });
// });

router.put("/:id", updatePerson);

// router.delete("/:id", (req, res) => {
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

router.delete("/:id", deletePerson);

module.exports = router;
