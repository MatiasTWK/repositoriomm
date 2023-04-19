const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/alumnos", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get users by id
router.get("/alumnos/:id", (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get users
router.get("/alumnos", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//update a user
router.put("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, curso, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nombre, apellido, curso, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//delete a user

router.delete("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
