const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    user:String,
    message :String,
    time :String
  })
  
  module.exports =  mongoose.model("Chats",chatSchema,"Chats")