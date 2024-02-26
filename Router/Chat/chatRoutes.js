const express = require("express")
const { getChat } = require("../../Api/Chat/chatController")

const router = express.Router()


router.get("/api/v1/chats",getChat)


module.exports = router