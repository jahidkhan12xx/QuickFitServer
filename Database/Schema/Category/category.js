const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category:String,
    image:String
})


module.exports = mongoose.model("category",categorySchema,"category")