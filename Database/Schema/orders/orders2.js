const { default: mongoose } = require("mongoose");

const orderSchema2 = new mongoose.Schema({
    ProductID: String,
    email: String,
    phone: String,
    paidStatus: Boolean,
    tranjectionId: String,
});

module.exports = mongoose.model(
    "quickFitOrder2",
    orderSchema2,
    "quickFitOrders2");