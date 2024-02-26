const SSLCommerzPayment = require('sslcommerz-lts');
const eshopCollection = require("../../../Database/Schema/EshopProducts/eshopProducts")
const orderCollection = require("../../../Database/Schema/orders/orders")

const order = async(req,res)=>{
    const id = req.body.productId
    const product = await eshopCollection.findById(id)
    const productPrice = parseInt(product?.price)
    const tran_id = Date.now()
    
    const data = {
        total_amount: productPrice,
        currency: 'BDT',
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `https://quick-fit-server.vercel.app/api/v1/order/success/${tran_id}`,
        fail_url: `https://quick-fit-server.vercel.app/api/v1/order/failed/${tran_id}`,
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: product?.title,
        product_category: product?.category,
        product_profile: 'general',
        cus_name: req.body?.name,
        cus_email: req.body?.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: req.body?.phone,
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: req.body?.address,
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    //console.log(data);
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(async(apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.send({ url: GatewayPageURL })

        const finalOrder = {
            ProductID: req.body.productId,
            email: req.body.email,
            phone: req.body.phone,
            title: product?.title,
            paidStatus: false,
            tranjectionId: tran_id,
        }
        const result = await  orderCollection.create(finalOrder)

    });

}


const updateOrder = async(req,res)=>{
    const result = await orderCollection.findOneAndUpdate({ tranjectionId: id }, {
        $set: {
            paidStatus: true,
        }
    }, {
        new: true
    })
    //console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `https://quick-fit-client.vercel.app/payment/success/${req.params.tranId}`
        )
    }
}

const deleteOrder = async(req,res)=>{
    const result = await orderCollection.findOneAndDelete({ tranjectionId: id })
    // console.log(result);
    if (result._id) {
        res.redirect(
            `https://quick-fit-client.vercel.app/payment/error/${req.params.tranId}`
        )
    }
}

module.exports = {
    order,
    updateOrder,
    deleteOrder

}