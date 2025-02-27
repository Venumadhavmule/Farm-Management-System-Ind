const User = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
const { SecretKey } = require("../config/env");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send("Invalid username or password.");
  }
  const token = jsonwebtoken.sign(
    { id: user._id, role: user.role },
    SecretKey,
    { expiresIn: "1h" }
  );
  res.send({ token });
};

const signup = async (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, password, role });
  await user.save();
  res.status(201).send("User registered successfully.");
};

module.exports = { login, signup };