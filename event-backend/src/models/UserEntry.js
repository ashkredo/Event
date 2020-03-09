const mongoose = require('mongoose');
const validator = require('validator');

const requiredString = {
  type: String,
  required: true,
  trim: true
};

const userEntrySchema = new mongoose.Schema(
  {
    firstName: {
      ...requiredString,
      minlength: 2,
      maxlength: 35
    },
    lastName: {
      ...requiredString,
      minlength: 2,
      maxlength: 35
    },
    email: {
      ...requiredString,
      unique: true,
      lowercase: true,
      maxlength: 255,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        }
      }
    },
    eventDate: {
      type: Date,
      required: true
    }
    // created_at: {
    //   type: Date,
    //   default: Date.now,
    //   required: true
    // }
  },
  {
    timestamps: true
  }
);

const UserEntry = mongoose.model('UserEntry', userEntrySchema);
