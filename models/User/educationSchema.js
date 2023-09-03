const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      lowercase: true
    },
    startingYear: Number,
    endingYear: Number,
    description: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = educationSchema;
