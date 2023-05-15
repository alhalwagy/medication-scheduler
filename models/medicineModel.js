const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medicineName: { type: String },
  medicineNotes: String,
  dailyDoses: Number,
  StartTime: Number,
  imageCode: String,
  quantity: Number,
  time: [],
  sonId: String,
}).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
