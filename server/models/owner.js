const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

module.exports = mongoose.model("owners", OwnerSchema);
