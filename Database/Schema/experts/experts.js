const mongoose = require("mongoose");

const expertsSchema = new mongoose.Schema({
    category : String,
    name:String,
    jobTitle:String,
    description:String,
    img:String,
    social_media:Object
})

module.exports = mongoose.model("experts",expertsSchema)