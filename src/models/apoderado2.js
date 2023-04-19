const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const apoderado2Schema = new mongoose.Schema({
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
    unique: true,
  },
  detalle: {
    type: Schema.Types.ObjectId,
    ref: "Detalle",
  },
});

module.exports = mongoose.model("apoderado2", apoderado2Schema);
