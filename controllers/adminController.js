const User = require("../models/User");

const getUsers = (req, res) => {
  User.find({}, "-password")
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send({ message: "Error fetching users", error });
    });
};

module.exports = { getUsers };