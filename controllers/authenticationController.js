const User = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
const { SecretKey } = require("../config/env");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).send("Invalid username or password.");
      }

      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(400).send("Invalid username or password.");
          }

          const token = jsonwebtoken.sign(
            { id: user._id, role: user.role },
            SecretKey,
            { expiresIn: "1h" }
          );
          res.send({ token });
        })
        .catch((error) => {
          res.status(500).send({ message: "Error comparing passwords", error });
        });
    })
    .catch((error) => {
      res.status(500).send({ message: "Error finding user", error });
    });
};

const signup = (req, res) => {
  const { username, password, role } = req.body;

  const user = new User({ username, password, role });

  user.save()
    .then(() => {
      res.status(201).send("User registered successfully.");
    })
    .catch((error) => {
      res.status(500).send({ message: "Error registering user", error });
    });
};

module.exports = { login, signup };