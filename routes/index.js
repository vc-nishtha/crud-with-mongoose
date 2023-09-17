const express = require('express');
const router = express.Router();
const user = require('./user');
const auth = require('./auth');
const authJWT = require('../middlewares/jwt.auth');

router.use('/auth', auth);
router.use('/user', authJWT.authToken, user);
module.exports = router;