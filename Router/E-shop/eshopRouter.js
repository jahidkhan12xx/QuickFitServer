const express = require("express")
const { getEshopAllData, getEshopSingleData, getEshopData } = require("../../Api/E-shop/eshopController")



const router = express.Router()


router.get("/api/v1/eshop",getEshopAllData)
router.get("/api/v1/eshop/:id",getEshopData)
router.get("/api/v1/eshop/data/:id",getEshopSingleData)


module.exports = router