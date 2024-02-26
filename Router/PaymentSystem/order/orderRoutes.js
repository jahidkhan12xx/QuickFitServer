const express = require("express")
const { order, updateOrder, deleteOrder } = require("../../../Api/PaymentSystem/Order/orderController")


const router = express.Router()


router.post("/api/v1/order",order)
router.post("/api/v1/order/success/:tranId",updateOrder)
router.post("/api/v1/order/failed/:tranId",deleteOrder)


module.exports = router