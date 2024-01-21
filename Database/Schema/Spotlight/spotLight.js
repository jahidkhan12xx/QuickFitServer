const mongoose = require("mongoose");

const spotlightCollection = new mongoose.Schema({
    category : String,
    title:String,
    date:String,
    author:String,
    description:String,
    img:String
})

module.exports = mongoose.model("spotlight",spotlightCollection,"spotlight")