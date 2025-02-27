const express = require('express');
const auth = require('../middlewares/authentication');
const { getTasks } = require('../controllers/technicianController');

const router = express.Router();

router.get('/tasks', auth(['technician']), getTasks);

module.exports = router;