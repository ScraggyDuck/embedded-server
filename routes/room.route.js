const express = require('express');
const roomController = require('../controllers/room.controller');
const authController = require('./../controllers/auth.controller');

const router = express.Router();

router.post('/post', roomController.setRoomData);

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/:roomId', roomController.getRoomById);

router.use(authController.restrictTo('admin'));

router.get('/', roomController.getAllRoom);

module.exports = router;
