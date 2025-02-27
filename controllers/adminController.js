const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find({}, '-password');
  res.send(users);
};

module.exports = { getUsers };