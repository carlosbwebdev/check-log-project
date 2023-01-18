const mongoose = require('mongoose');

const Task = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
  },
  { collection: 'task-data' }
);

const modal = mongoose.model('TaskData', Task);

module.exports = modal;
