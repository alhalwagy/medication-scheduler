const Notes = require('./../models/notesModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.addNote = catchAsync(async (req, res, next) => {
  const newNote = await Notes.create({
    note: req.body.note,
    piriorty: req.body.piriorty,
    sonId: req.user.id,
  });

  res.status(200).json({
    status: 'success',
    data: {
      newNote,
    },
  });
});

exports.deleteNote = catchAsync(async (req, res, next) => {
  const note = await Notes.findByIdAndDelete(req.params.id);

  if (!note) {
    return next(new AppError('No notes found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

exports.getAllNotes = catchAsync(async (req, res, next) => {
  const notes = await Notes.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes,
    },
  });
});

exports.getSonNotes = catchAsync(async (req, res, next) => {
  const notes = await Notes.find({ sonId: req.user.id });

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes,
    },
  });
});

exports.getParentNotes = catchAsync(async (req, res, next) => {
  const notes = await Notes.find({ sonId: req.user.sonId });

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes,
    },
  });
});
