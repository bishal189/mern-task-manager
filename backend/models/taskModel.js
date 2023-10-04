const moongoes = require("mongoose");

const taskSchema = moongoes.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = moongoes.model("Task", taskSchema);

module.exports = Task;
