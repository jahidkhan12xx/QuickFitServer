const mongoose = require("mongoose");

const newsStoriesCollection = new mongoose.Schema({
   title:String,
   date:String,
   description:String,
   img:String,
   category:String 
})


module.exports = mongoose.model("newsStories",newsStoriesCollection,"newsStories")