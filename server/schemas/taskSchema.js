const mongoose = require('mongoose');

// const Task = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, 'Please provide a title'],
//     },
//     description: {
//       type: String,
//       required: [true, 'Please provide a description'],
//     },
//   },
//   { collection: 'task-data' }
//);
const Task = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'Please provide a title'],
    },
    todos: [
      {
        title: {
          type: String,
          required: [true, 'Please provide a title'],
        },
        description: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { collection: 'task-data' }
);

const modal = mongoose.model('TaskData', Task);

module.exports = modal;
