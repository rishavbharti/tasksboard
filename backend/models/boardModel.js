import mongoose from "mongoose";

const boardSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  lists: [
    {
      listId: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
    },
  ],
});

const Board = mongoose.model("Board", boardSchema);
export default Board;
