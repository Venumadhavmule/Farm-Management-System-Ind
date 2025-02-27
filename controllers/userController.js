const User = require('../models/User');

const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id, '-password');
  res.send(user);
};

module.exports = { getProfile };