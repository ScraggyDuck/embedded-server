const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  NameDevice: String,
  Voltage: String,
  Current: String,
  Power: String,
  Energy: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
