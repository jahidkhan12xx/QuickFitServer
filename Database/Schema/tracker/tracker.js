const { default: mongoose } = require("mongoose");


const trackerSchema = new mongoose.Schema({
    email:String,
    exercise:String,
    value:Number, 
    target:Number,
    unit:String,
    status:String,
    date:String,
})

module.exports = mongoose.model("tracker", trackerSchema, "tracker")