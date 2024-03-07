// const { default:mongoose, ongoose } =require("mongoose");

const { default: mongoose } = require("mongoose")

const reviewsSchema = new mongoose.Schema({
    reviewerName: String,
    reviewerImg: String,
    profession: String,
    review: String,
    category: String,
    rating:Number
})

module.exports = mongoose.model("review" ,reviewsSchema,"reviews")