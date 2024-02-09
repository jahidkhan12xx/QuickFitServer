const { default: mongoose } = require("mongoose");

const trainerSchema = new mongoose.Schema({
   name:String,
   email:String,
   experience:String,
    price:String,
    days:String,
     specialization:String,
  })

module.exports = mongoose.model( "trainers", trainerSchema,"trainers")