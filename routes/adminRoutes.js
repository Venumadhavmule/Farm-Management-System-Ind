const express = require('express');
const authentication = require('../middlewares/authentication');
const { getUsers } = require('../controllers/adminController');

const router = express.Router();

router.get('/users', authentication(['admin']), getUsers);

module.exports = router;