const express = require("express")
const { getTeamsData } = require("../../Api/Teams/teamsController")




const router = express.Router()


router.get("/api/v1/teams",getTeamsData)



module.exports = router