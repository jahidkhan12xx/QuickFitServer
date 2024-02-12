const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
    category : String,
    name:String,
    jobTitle:String,
    description:String,
    img:String,
    social_media:Object
})

module.exports = mongoose.model("teams",teamsSchema)