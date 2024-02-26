const express = require("express")
const { getServicesData } = require("../../Api/Services/servicesController")
const router = express.Router()



router.get("/api/v1/services",getServicesData)



module.exports = router