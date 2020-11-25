import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  deadline: Date,
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  deadline: Date,
  tasks: [taskSchema],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// const Task = mongoose.model("Task", taskSchema);
const List = mongoose.model("List", listSchema);

export default List;
