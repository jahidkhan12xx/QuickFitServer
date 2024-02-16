const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    category:String,
    image:String,
    types:Array
})


module.exports = mongoose.model("workout",workoutSchema,"workout")