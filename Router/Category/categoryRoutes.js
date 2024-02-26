const express = require("express")
const { getCategoryData, getSingleCategoryData } = require("../../Api/Category/categoryController")


const router = express.Router()


router.get("/api/v1/category",getCategoryData)
router.get("/api/v1/category/:id",getSingleCategoryData)


module.exports = router