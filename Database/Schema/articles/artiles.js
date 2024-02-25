const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    Category:String,
    image:String,
    title:String,
    subTitle:String,
    publishDate:String,
    reviewer:String,
})


module.exports = mongoose.model("article",articleSchema,"articles")