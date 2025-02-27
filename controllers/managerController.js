const Task = require('../models/Task');

const assignTask = (req, res) => {
  const { title, deadline, assignedTo } = req.body;

  const task = new Task({ title, deadline, assignedTo });

  task.save()
  .then(() => {
      res.status(201).send('Task assigned successfully.');
    })
    .catch((error) => {
      res.status(500).send({ message: 'Error assigning task', error });
    });
};

module.exports = { assignTask };