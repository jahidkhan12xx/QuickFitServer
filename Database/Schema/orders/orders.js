const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    ProductID: String,
    email: String,
    title: String,
    phone: String,

    paidStatus: Boolean,
    tranjectionId: String,
});

module.exports = mongoose.model(
    "quickFitOrder",
    orderSchema,
    "quickFitOrders");