// models/Biodata.js
const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema(
  {
    // 1 Full Name
    fullname: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    // 2 Email
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        'Please enter a valid email',
      ],
    },

    // 3 Phone
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\d{10,15}$/, 'Enter digits only, 10–15 characters'],
    },

    // 4 Date of Birth
    dob: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },

    // 5 Gender
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['Male', 'Female', 'Other'],
    },

    // 6 Address Line 1
    addressline1: {
      type: String,
      required: [true, 'Address line 1 is required'],
      trim: true,
    },

    // 7 Address Line 2 (optional)
    addressline2: {
      type: String,
      trim: true,
    },

    // 8 City
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },

    // 9 State / Province
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },

    // 10 ZIP / Postal Code
    zip: {
      type: String,
      required: [true, 'ZIP code is required'],
      trim: true,
    },

    // 11 Country
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },

    // 12 Highest Qualification
    highestDegree: {
      type: String,
      required: [true, 'Highest qualification is required'],
      trim: true,
    },

    // 13 University / College
    university: {
      type: String,
      required: [true, 'University / College is required'],
      trim: true,
    },

    // 14 Graduation Year
    graduationYear: {
      type: Number,
      min: [1900, 'Year too old'],
      max: [new Date().getFullYear(), 'Year cannot be in the future'],
    },

    // 15 Occupation
    occupation: {
      type: String,
      trim: true,
    },

    // 16 Company
    company: {
      type: String,
      trim: true,
    },

    // 17 Years of Experience
    experienceYears: {
      type: Number,
      min: 0,
      max: 100,
    },

    // 18 Key Skills
    skills: {
      type: String,
      trim: true,
    },

    // 19 Hobbies / Interests
    hobbies: {
      type: String,
      trim: true,
    },

    // 20 Short Bio
    bio: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Biodata', biodataSchema);
