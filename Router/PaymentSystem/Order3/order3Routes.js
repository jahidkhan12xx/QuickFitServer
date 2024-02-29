const express = require("express")
const { order3, updateOrder3, deleteOrder3 } = require("../../../Api/PaymentSystem/Order3/order3controller")




const router = express.Router()


router.post("/api/v1/order3",order3)
router.post("/api/v1/order3/success/:tranId3",updateOrder3)
router.post("/api/v1/order3/failed/:tranId3",deleteOrder3)


module.exports = router