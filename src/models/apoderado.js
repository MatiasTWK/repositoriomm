const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apoderadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  detalle: {
    type: Schema.Types.ObjectId,
    ref: "Detalle",
  },
});

module.exports = mongoose.model("Apoderado", apoderadoSchema);
