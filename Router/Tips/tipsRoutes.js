const express = require("express")
const { getTipsData } = require("../../Api/Tips/tipsController")

const router = express.Router()


router.get("/api/v1/tips",getTipsData)


module.exports = router