const express = require("express")
const { getBookData, getAllBooksData } = require("../../Api/Books/booksController")



const router = express.Router()


router.get("/api/v1/books",getAllBooksData)
router.get("/api/v1/books/:id",getBookData)


module.exports = router