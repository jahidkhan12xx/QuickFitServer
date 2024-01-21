const mongoose = require("mongoose");


const monthPickSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    date:String
})


module.exports = mongoose.model("monthPiks",monthPickSchema,"monthPiks")