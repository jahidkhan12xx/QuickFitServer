const express = require("express")
const { updateLikes } = require("../../Api/UserInteraction/userInteractionControler")

const router = express.Router()


router.get("/api/v1/likes/:email",updateLikes)


module.exports = router