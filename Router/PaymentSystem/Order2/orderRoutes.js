const express = require("express")
const { order2, updateOrder2, deleteOrder2 } = require("../../../Api/PaymentSystem/Order2/order2Controller")



const router = express.Router()


router.post("/api/v1/order2",order2)
router.post("/api/v1/order2/success/:tranId2",updateOrder2)
router.post("/api/v1/order2/failed/:tranId2",deleteOrder2)


module.exports = router