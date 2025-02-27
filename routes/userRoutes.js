const express = require('express');
const auth = require('../middlewares/authentication');
const { getProfile } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', auth(['user']), getProfile);

module.exports = router;