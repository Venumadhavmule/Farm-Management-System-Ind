const Task = require('../models/Task');

const assignTask = async (req, res) => {
  const { title, deadline, assignedTo } = req.body;
  const task = new Task({ title, deadline, assignedTo });
  await task.save();
  res.status(201).send('Task assigned successfully.');
};

module.exports = { assignTask };