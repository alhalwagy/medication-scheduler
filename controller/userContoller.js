const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createParent = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    nationalID: req.body.nationalID,
    role: 'parent',
    sonId: req.user.id,
  });
  res.status(200).json({
    status: 'success',
    data: {
      newUser,
    },
  });
});

exports.getUserInfo = catchAsync(async (req, res, next) => {
  const userInfo = await User.findById(req.user.id).select(
    'name phoneNumber nationalID'
  );
  res.status(200).json({
    status: 'success',
    data: {
      userInfo,
    },
  });
});
