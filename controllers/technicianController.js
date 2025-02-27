const Task = require('../models/Task');

const getTasks = (req, res) => {
  Task.find({ assignedTo: req.user.id })
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send({ message: 'Error fetching tasks', error });
    });
};

module.exports = { getTasks };