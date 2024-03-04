const mongoose = require("mongoose");


const publicationSchema = new mongoose.Schema({
    Article: [{
        artTitle: String,
        artDetail: String
    }],
    Category: String,
    image: String,
    title: String,
    subTitle: String,
    publishDate: String,
    publisher: String,
    reviewer: String
});


module.exports = mongoose.model("article",publicationSchema,"articles")