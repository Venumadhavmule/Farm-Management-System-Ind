const express = require('express');
const auth = require('../middlewares/authentication');
const { assignTask } = require('../controllers/managerController');

const router = express.Router();

router.post('/tasks', auth(['manager']), assignTask);

module.exports = router;