const User = require('../models/User');

const getProfile = (req, res) => {
  User.findById(req.user.id, '-password')
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send({ message: 'Error fetching profile', error });
    });
};

module.exports = { getProfile };