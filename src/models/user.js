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
  date: {
    type: Date,
    default: Date.now,
  },
  apoderado: {
    type: Schema.Types.ObjectId,
    ref: "Apoderado",
    autopopulate: true,
  },

  apoderado2: {
    type: Schema.Types.ObjectId,
    ref: "apoderado2",
    autopopulate: true,
  },
});
userSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("User", userSchema);
