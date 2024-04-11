const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");
require("dotenv").config();

exports.createUser = async (req, res, next) => {
  try {
    const { fullName, email, password, type } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if type is valid
    if (type !== "employee" && type !== "admin") {
      return res.status(400).json({
        message: "Invalid user type. Must be either 'employee' or 'admin'.",
      });
    }

    // Create new user
    const newUser = new User({ fullName, email, password, type });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const email = req.headers.email;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
    user.fullName = fullName;
    if (password) {
      user.password = password; // If you want to update password, make sure it's already hashed
    }
    await user.save();

    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    // Find and delete user
    const deletedUser = await User.findOneAndDelete({ email });

    // Check if user exists
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "fullName email type");
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    console.log("found user", user);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};
