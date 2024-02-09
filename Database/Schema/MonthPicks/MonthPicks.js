const mongoose = require("mongoose");


const monthPickSchema = new mongoose.Schema({
    title:String,
    description:String,
    img:String,
    date:String,
    author:String,
    category:String,
    paragraph:[String]
})


module.exports = mongoose.model("monthPiks",monthPickSchema,"monthPiks")