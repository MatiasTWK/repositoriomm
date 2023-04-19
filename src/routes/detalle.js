const express = require("express");
const detalleSchema = require("../models/detalle");

const router = express.Router();

//create a new detalle

router.post("/detalle", async (req, res) => {
  try {
    const detalle = new detalleSchema(req.body);
    const result = await detalle.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all detalles

router.get("/detalle", async (req, res) => {
  try {
    const detalles = await detalleSchema.find();
    res.status(200).json(detalles);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get one detalle

router.get("/detalle/:id", async (req, res) => {
  try {
    const detalle = await detalleSchema.findById(req.params.id);
    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a detalle

router.put("/detalle/:id", async (req, res) => {
  try {
    const detalle = await detalleSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a detalle

router.delete("/detalle/:id", async (req, res) => {
  try {
    const detalle = await detalleSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
