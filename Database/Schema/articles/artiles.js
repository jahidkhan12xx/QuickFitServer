const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    category:String,
    image:String
})


module.exports = mongoose.model("article",articleSchema,"articles")