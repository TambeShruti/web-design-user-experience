// controllers/userController.js
const User = require("../models/userSchema");

exports.createUser = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // Create new user
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      { fullName, password },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    await User.findOneAndDelete({ email });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "fullName email");
    res.json(users);
  } catch (error) {
    next(error);
  }
};
