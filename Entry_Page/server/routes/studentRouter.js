// routes/studentRoutes.js

const express = require('express');
const router = express.Router();

const Student = require('../models/studentmodels');

// Create a new student
router.post('/students/add', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
