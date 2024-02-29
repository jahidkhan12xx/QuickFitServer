const express = require("express")
const { getSpotlightData, getSpotlightSingleData } = require("../../Api/Spotlight/spotlightController")
const { getWorkoutData, getSingleWorkoutData } = require("../../Api/Workout/workoutController")



const router = express.Router()


router.get("/api/v1/workout",getWorkoutData)
router.get("/api/v1/workout/:id",getSingleWorkoutData)


module.exports = router