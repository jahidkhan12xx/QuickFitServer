const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    blogId : String,
    name : String,
    comment : String,
    date: String,
    img :String
})


module.exports = mongoose.model("Comments",commentSchema,"Comments");