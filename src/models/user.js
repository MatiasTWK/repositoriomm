const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  apoderado: {
    type: Schema.Types.ObjectId,
    ref: "Apoderado",
  },
  apoderado2: {
    type: Schema.Types.ObjectId,
    ref: "apoderado2",
  },
});

module.exports = mongoose.model("User", userSchema);
