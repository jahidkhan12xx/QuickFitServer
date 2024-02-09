const orderCollection2 = require("../../Database/Schema/orders/orders2")

const postOrderData2 = async (product) => {
    console.log(product)
    const res = await orderCollection2.create(product)
    return res
}

const getOrderData2 = (id) => {
    const res = orderCollection2.find({ email: id })
    return res
}
const updateOrderData2 = async (id) => {
    const res = await orderCollection2.findOneAndUpdate({ tranjectionId: id }, {
        $set: {
            paidStatus: true,
        }
    }, {
        new: true
    })
    return res

}

const deleteOrderData2 = async (id) => {
    const res = await orderCollection2.findOneAndDelete({ tranjectionId: id })
    return res
}

module.exports = {
    getOrderData2, postOrderData2, updateOrderData2, deleteOrderData2
}