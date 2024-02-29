const express = require("express")
const { getTipsData } = require("../../Api/Tips/tipsController")
const { addUser, getAllUser, getSingleUser, deleteUserData, updateUserRole, updatePublisherRole } = require("../../Api/Users/userController")

const router = express.Router()


router.post("/api/v1/users",addUser)
router.get("/api/v1/users",getAllUser)
router.get("/api/v1/users/:email",getSingleUser)
router.delete("/api/v1/users/:id",deleteUserData)
router.patch("/api/v1/users/admin/:id",updateUserRole)
router.patch("/api/v1/users/publisher/:id",updatePublisherRole)



module.exports = router