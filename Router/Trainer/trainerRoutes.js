const express = require("express")
const { postTrainerData } = require("../../Api/Trainer/trainerController")


const router = express.Router()


router.get("/api/v1/trainer",postTrainerData)


module.exports = router