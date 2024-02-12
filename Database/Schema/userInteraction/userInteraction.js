
const mongoose = require("mongoose");


const userInteraction = new mongoose.Schema({
    likes : [String],
    comment : Number,
})


module.exports = mongoose.model("UserInteraction",userInteraction,"UserInteraction")



