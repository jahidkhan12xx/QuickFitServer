const express = require("express")
const { forumPost, forumPostGet, forumSinglePostGet, forumGetNewestPost, forumPopularPost, forumPostComment, forumPostLike, forumSearch, forumPostsByEmail } = require("../../Api/Forum/forumController")



const router = express.Router()


router.post("/api/v1/forum",forumPost)
router.get("/api/v1/forum/:category",forumPostGet)
router.get("/api/v1/forum/single/:id",forumSinglePostGet)
router.get("/api/v1/forum/find/newestpost",forumGetNewestPost)
router.get("/api/v1/forum/find/popularpost",forumPopularPost)
router.post("/api/v1/forum/comment/:id",forumPostComment)
router.put("/api/v1/forum/like",forumPostLike)
router.post("/api/v1/forum/search",forumSearch)
router.post("/api/v1/forum/userprofile/:email",forumPostsByEmail)



module.exports = router