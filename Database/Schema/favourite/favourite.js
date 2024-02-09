const mongoose = require("mongoose");


const favSchema = new mongoose.Schema({
    blogId : String,
    email : String,
    title : String,
    description : String,
    img:String,
    date:String,
    paragraph:[String],
    category:String,
    author:String

})

module.exports = mongoose.model("Favourites",favSchema,"Favourites");