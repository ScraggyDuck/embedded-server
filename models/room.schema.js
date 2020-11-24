const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  NameDevice: String,
  data: [
    {
      Voltage: String,
      Current: String,
      Power: String,
      Energy: String,
      createdAt: {
        type: Date,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
