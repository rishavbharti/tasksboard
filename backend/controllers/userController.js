import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUserBoard = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.json({
      _id: user._id,
    });
  } else {
    res.status(401).json({ error: "User not found!" });
  }
};
