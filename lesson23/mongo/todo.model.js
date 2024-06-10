const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    require: true,
  },
});

module.exports = model("Todos", TodoSchema);
