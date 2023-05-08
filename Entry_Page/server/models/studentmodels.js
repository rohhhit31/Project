const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  marks10th: {
    type: Number,
    required: true,
  },
  marks12th: {
    type: Number,
    required: true,
  },
  cgpa: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
