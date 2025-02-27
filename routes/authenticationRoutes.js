const express = require('express');
const { login, signup } = require('../controllers/authenticationController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;