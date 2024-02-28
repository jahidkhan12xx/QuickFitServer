const express = require("express")
const { getCartData, getCartAllData, postCartData, deleteCartData } = require("../../Api/cart/cartController")

const router = express.Router()

router.get("/api/v1/cart/:id",getCartData)
router.get("/api/v1/cart",getCartAllData)
router.post("/api/v1/cart",postCartData)
router.delete("/api/v1/cart/:id",deleteCartData)





module.exports = router