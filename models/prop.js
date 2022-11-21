const mongoose = require("mongoose");

const propSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  file: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
  }
});

const Prop = mongoose.model("Prop", propSchema);

module.exports = Prop;
