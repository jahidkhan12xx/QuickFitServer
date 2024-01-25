const books = require("../../Database/Schema/books/books")

const getBookData = (id) =>{
const res = books.findOne({category:id})
return res
}

module.exports= {
    getBookData
}