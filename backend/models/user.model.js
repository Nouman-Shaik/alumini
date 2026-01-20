import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'alumni', 'admin'],  // Updated to match your form options
    required: true
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String }, // URL or file path to the resume
    resumeOriginalName: { type: String },  // Changed to camelCase
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    profilePicture: {  // Changed to camelCase
      type: String,
      default: ""
    },
    graduationYear: { type: String },  // Added for alumni/student
    major: { type: String },  // Added for alumni/student
    currentInstitution: { type: String }  // Added for students
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);