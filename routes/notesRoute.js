const express = require('express');
const authController = require('./../controller/authController');
const notesController = require('./../controller/notesController');

const router = express.Router();

router.post('/addNote', authController.protect, notesController.addNote);
router.delete(
  '/deleteNote/:id',
  authController.protect,
  notesController.deleteNote
);
router.get('/getAllNotes', authController.protect, notesController.getAllNotes);

router.get('/getSonNotes', authController.protect, notesController.getSonNotes);
router.get(
  '/getParentNotes',
  authController.protect,
  notesController.getParentNotes
);

module.exports = router;
