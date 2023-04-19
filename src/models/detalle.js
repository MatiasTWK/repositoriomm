const mongoose = require("mongoose");

const detalleSchema = new mongoose.Schema({
  reporte: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Detalle", detalleSchema);
