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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  atrasos: {
    type: Number,
    default: 0,
  },
  estado: {
    type: Boolean,
    default: false,
  },
});
userSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("User", userSchema);
