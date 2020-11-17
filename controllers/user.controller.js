const User = require('./../models/user.schema');

exports.setData = async (req, res, next) => {
  console.log(req.body);
  let doc = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};

exports.getData = async (req, res, nest) => {
  const user = await User.find();
  if (!user) {
    return next(new AppError('No document found!', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: user,
    },
  });
};
