const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  CourseVideo: String,
  lectures: [String],
  CourseProvider: String,
  ProviderImg: String,
  description: String,
  curriculum: String,
  certification: Boolean,
  quiz: [{
    question: String,
    options: [String],
    answer: Number
  }],
  category: String
});


module.exports= mongoose.model('courseDetails', courseSchema, "courseDetails");
