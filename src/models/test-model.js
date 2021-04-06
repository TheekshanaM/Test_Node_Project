const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("tests", TestSchema);
