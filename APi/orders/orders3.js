const orderCollection3 = require("../../Database/Schema/orders/orders3")

const postOrderData3 = async (book) => {
    console.log(book)
    const res = await orderCollection3.create(book)
    return res
}

const getOrderData3 = (id) => {
    const res = orderCollection3.find({ email: id })
    return res
}
const updateOrderData3 = async (id) => {
    const res = await orderCollection3.findOneAndUpdate({ tranjectionId: id }, {
        $set: {
            paidStatus: true,
        }
    }, {
        new: true
    })
    return res

}

const deleteOrderData3 = async (id) => {
    const res = await orderCollection3.findOneAndDelete({ tranjectionId: id })
    return res
}

module.exports = {
    getOrderData3, postOrderData3, updateOrderData3, deleteOrderData3
}