const express = require("express")
const { getArticleData, getArticleSingleData } = require("../../Api/Article/articleController")
const router = express.Router()


router.get("/api/v1/articles",getArticleData)
router.get("/api/v1/articles/:id",getArticleSingleData)

module.exports = router