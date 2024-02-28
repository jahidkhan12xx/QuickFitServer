const express = require("express")
const { getExpertsData } = require("../../Api/Expert/expertController")


const router = express.Router()


router.get("/api/v1/experts",getExpertsData)


module.exports = router