const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
    category:String, 
    BookName:String,
    image:String,
    description:String
})

module.exports = mongoose.model("book", bookSchema, "books")