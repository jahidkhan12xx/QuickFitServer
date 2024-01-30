const orderCollection = require("../../Database/Schema/orders/orders")

const postOrderData = async (product) => {
    console.log(product)
    const res = await orderCollection.create(product)
    return res
}

const getOrderData = (id) => {
    const res = orderCollection.find({ email: id })
    return res
}
const updateOrderData = async (id) => {
    const res = await orderCollection.findOneAndUpdate({ tranjectionId: id }, {
        $set: {
            paidStatus: true,
        }
    }, {
        new: true
    })
    return res

}

const deleteOrderData = async (id) => {
    const res = await orderCollection.findOneAndDelete({ tranjectionId: id })
    return res
}

module.exports = {
    getOrderData, postOrderData, updateOrderData, deleteOrderData
}