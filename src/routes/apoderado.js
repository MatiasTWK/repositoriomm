const express = require("express");
const apoderadoSchema = require("../models/apoderado");

const router = express.Router();

//create a new apoderado

router.post("/apoderado", async (req, res) => {
  const apoderado = new apoderadoSchema({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
  });

  try {
    const apoderadoGuardado = await apoderado.save();
    res.status(201).json(apoderadoGuardado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get a new apoderado

router.get("/apoderado", async (req, res) => {
  try {
    const apoderados = await apoderadoSchema.find();
    res.status(200).json(apoderados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get a single apoderado

router.get("/apoderado/:id", async (req, res) => {
  try {
    const apoderado = await apoderadoSchema.findById(req.params.id);
    res.status(200).json(apoderado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//put a single apoderado

router.put("/apoderado/:id", async (req, res) => {
  try {
    const apoderado = await apoderadoSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(apoderado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a single apoderado

router.delete("/apoderado/:id", async (req, res) => {
  try {
    const apoderado = await apoderadoSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(apoderado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
