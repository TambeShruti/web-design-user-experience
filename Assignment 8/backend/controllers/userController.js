// controllers/userController.js
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
exports.createUser = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate password
    if (!isValidPassword(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Function to validate password
function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

exports.editUser = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const email = req.headers.email;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if password is provided and validate it
    if (password && !isValidPassword(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    // Hash the password if provided
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Find and update user
    const user = await User.findOneAndUpdate(
      { email: email }, // Find user by email
      { fullName: fullName, password: hashedPassword }, // Update full name and password
      { new: true } // Return the updated user
    );

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
    console.log("User data updated!");
  } catch (error) {
    next(error);
  }
};

// Function to validate password
function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Find and delete user
    const deletedUser = await User.findOneAndDelete({ email });

    // Check if user exists
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(error); // Pass error to error handling middleware
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
