const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  note: {
    type: String,
  },
  piriorty: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  sonId: String,
}).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;
