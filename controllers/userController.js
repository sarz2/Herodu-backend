const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }

  const user = await User.findOne({ email });
  const matchPassword = bcrypt.compare(password, user.password);

  if (user && matchPassword) {
    const generatedToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token: generatedToken,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

module.exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
