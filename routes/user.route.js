const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.getData);
router.post('/data', userController.setData);

module.exports = router;
