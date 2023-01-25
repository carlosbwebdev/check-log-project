const mongoose = require('mongoose');

const NewEntryData = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    team: {
      type: String,
      required: true,
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
