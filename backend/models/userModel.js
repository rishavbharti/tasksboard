import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  // name: {
  //     type: String
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  lists: [
    {
      listId: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
