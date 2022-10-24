const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("Please Enter All Fields");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User could not be found");
  }

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

module.exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    const generatedToken = jwt.sign(
      { id: updatedUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.json({
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generatedToken,
      },
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports.signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please Enter all Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
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
    res.status(400);
    throw new Error("Invalid user data");
  }
});
