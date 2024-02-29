const express = require("express")
const { getNewStories, getSingleStory, getAuthorWiseStory, addStory } = require("../../Api/NewStories/newStoriesController")


const router = express.Router()


router.get("/api/v1/newStories",getNewStories)
router.get("/api/v1/newStories/:id",getSingleStory)
router.get("/api/v1/stories/:author",getAuthorWiseStory)
router.post("/api/v1/addStories",addStory)

module.exports = router