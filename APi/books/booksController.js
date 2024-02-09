const books = require("../../Database/Schema/books/books")

const getBookData = (id) =>{
const res = books.findOne({category:id})
return res
}

const getSingleBookData = (id) =>{
    const res = books.findById(id)
return res
}

module.exports= {
    getBookData , getSingleBookData
}