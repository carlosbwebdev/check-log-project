const mongoose = require('mongoose');

const NewEntryData = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'Please provide a title'],
      default: Date.now,
    },
    team: {
      type: String,
    },
    todos: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        byWhom: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { collection: 'NewEntryData' }
);

const modal = mongoose.model('NewEntryData', NewEntryData);

module.exports = modal;
