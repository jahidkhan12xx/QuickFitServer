const express = require("express")
const { getSpotlightData, getSpotlightSingleData } = require("../../Api/Spotlight/spotlightController")



const router = express.Router()


router.get("/api/v1/spotlight",getSpotlightData)
router.get("/api/v1/spotlight/:id",getSpotlightSingleData)


module.exports = router