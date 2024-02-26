const books = require("../../Database/Schema/books/books.js")

const getBookData = async (req,res) =>{
    const id = req.params.id;
const result = await books.findOne({category:id})
res.send(result)
}

const getSingleBookData = async (req,res) =>{
    const id = req.params.id;
    const result = await books.findById(id)
res.send(result)
}

const getAllBooksData = async (req,res) =>{
    
    const result = await books.find()
res.send(result)
}

module.exports= {
    getBookData , getSingleBookData, getAllBooksData
}