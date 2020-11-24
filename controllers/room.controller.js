const Room = require('../models/room.schema');
const AppError = require('../utils/appError');

exports.getAllRoom = async (req, res, next) => {
  const rooms = await Room.find();
  res.json(
    {
      status: 'success',
      results: rooms.length,
      data: rooms,
    },
    200
  );
};

exports.setRoomData = async (req, res, next) => {
  console.log(req.body);
  const { NameDevice, Voltage, Current, Power, Energy } = req.body;
  const date = new Date();
  console.log(date);
  const roomData = { Voltage, Current, Power, Energy, createdAt: date };
  const room = await Room.findOne({ NameDevice });
  if (room) {
    room.data.push(roomData);
    const roomUpdated = await Room.findOneAndUpdate({ NameDevice }, room, {
      new: true,
      runValidators: true,
    });
    res.json(
      {
        status: 'success',
        data: roomUpdated,
      },
      200
    );
  } else {
    const newRoom = await Room.create({
      NameDevice,
      data: [roomData],
    });
    res.json(
      {
        status: 'success',
        data: newRoom,
      },
      200
    );
  }
};

exports.getRoomById = async (req, res, next) => {
  const NameDevice = req.params.roomId;

  const room = await Room.findOne({ NameDevice });
  if (!room) {
    return next(new AppError('No document found with that ID', 404));
  }
  res.json(
    {
      status: 'success',
      data: room,
    },
    200
  );
};
