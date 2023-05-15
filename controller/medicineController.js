const Medicine = require('../models/medicineModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.addMedicine = catchAsync(async (req, res, next) => {
  const newMedicine = await Medicine.create({
    medicineName: req.body.medicineName,
    medicineNotes: req.body.medicineNotes,
    dailyDoses: req.body.dailyDoses,
    StartTime: req.body.StartTime,
    imageCode: req.body.imageCode,
    quantity: req.body.quantity,
    time: req.body.time,
    sonId: req.user.id,
  });

  res.status(200).json({
    status: 'success',
    data: {
      newMedicine,
    },
  });
});

exports.updateMedicine = catchAsync(async (req, res, next) => {
  const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!medicine) {
    return next(new AppError('No medicine found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      medicine,
    },
  });
});

exports.deleteMedicine = catchAsync(async (req, res, next) => {
  const medicine = await Medicine.findByIdAndDelete(req.params.id);

  if (!medicine) {
    return next(new AppError('No medicine found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

exports.getAllMedicines = catchAsync(async (req, res, next) => {
  const medicines = await Medicine.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: medicines.length,
    data: {
      medicines,
    },
  });
});

exports.getParentMedicines = catchAsync(async (req, res, next) => {
  const medicines = await Medicine.find({ sonId: req.user.sonId });

  res.status(200).json({
    status: 'success',
    results: medicines.length,
    data: {
      medicines,
    },
  });
});

exports.getSonMedicines = catchAsync(async (req, res, next) => {
  const medicines = await Medicine.find({ sonId: req.user.id });

  res.status(200).json({
    status: 'success',
    results: medicines.length,
    data: {
      medicines,
    },
  });
});
