const express = require("express");
const apoderado2Schema = require("../models/apoderado2");

const router = express.Router();

//create a new apoderado2

router.post("/apoderado2", async (req, res) => {
  const apoderado2 = new apoderado2Schema({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
  });

  try {
    const apoderado2Created = await apoderado2.save();
    res.status(201).json(apoderado2Created);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all apoderado2

router.get("/apoderado2", async (req, res) => {
  try {
    const apoderado2 = await apoderado2Schema.find();
    res.status(200).json(apoderado2);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get apoderado2 by id

router.get("/apoderado2/:id", async (req, res) => {
  try {
    const apoderado2 = await apoderado2Schema.findById(req.params.id);
    res.status(200).json(apoderado2);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update apoderado2 by id

router.put("/apoderado2/:id", async (req, res) => {
  try {
    const apoderado2 = await apoderado2Schema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(apoderado2);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete apoderado2 by id

router.delete("/apoderado2/:id", async (req, res) => {
  try {
    const apoderado2 = await apoderado2Schema.findByIdAndDelete(req.params.id);
    res.status(200).json(apoderado2);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
