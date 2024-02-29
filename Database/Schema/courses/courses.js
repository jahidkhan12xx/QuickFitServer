const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  image: String,
  price: Number,
  courseProvider: String,
  courseTitle: String,
  courseDuration: String,
  category: String,
  level: String,
  lectures: Number,
});

module.exports = mongoose.model('course', courseSchema, 'courses');