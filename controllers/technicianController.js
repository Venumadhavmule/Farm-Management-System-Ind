const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });
  res.send(tasks);
};

module.exports = { getTasks };