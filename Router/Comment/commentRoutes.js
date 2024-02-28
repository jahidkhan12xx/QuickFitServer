const express = require("express")
const { addComment, getComment } = require("../../Api/Comment/commentController")


const router = express.Router()


router.post("/api/v1/comments",addComment)
router.get("/api/v1/comments/:blogId",getComment)




module.exports = router