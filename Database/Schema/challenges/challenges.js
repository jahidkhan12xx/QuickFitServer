const { default:mongoose } =require("mongoose");

const challengesSchema = new mongoose.Schema({
    title:String,
    description:String,
    videoLinks:Array

})

module.exports = mongoose.model("challenge" ,challengesSchema,"challenges")