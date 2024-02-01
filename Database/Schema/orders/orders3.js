const { default: mongoose } = require("mongoose");

const orderSchema3 = new mongoose.Schema({
    ProductID: String,
    email: String,
    title: String,
    phone: String,

    paidStatus: Boolean,
    tranjectionId: String,
});

module.exports = mongoose.model(
    "bookOrder",
    orderSchema3,
    "bookOrders");