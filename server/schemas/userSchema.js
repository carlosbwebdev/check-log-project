const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please tell us your name!'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
    },
    email: {
      type: String,
      unique: true,
    },
    admin: {
      type: Boolean,
    },

    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NewEntryData',
      },
    ],
  },
  { collection: 'user-data' }
);

const modal = mongoose.model('UserData', User);

module.exports = modal;
