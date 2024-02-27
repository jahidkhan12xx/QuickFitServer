const orderCollection2 = require("../../../Database/Schema/orders/orders2")

const order2 = async(req,res) =>{
    
        const price = req.body.productId
        const productPrice = parseInt(price)
        const tran_id = Date.now()
        // console.log(price);
    
        const data = {
            total_amount: productPrice,
            currency: 'BDT',
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `https://quick-fit-server.vercel.app/api/v1/order2/success/${tran_id}`,
            fail_url: `https://quick-fit-server.vercel.app/api/v1/order2/failed/${tran_id}`,
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: "product?.title",
            product_category: "product?.category",
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
        console.log(data);
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(async(apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.send({ url: GatewayPageURL })
    
            const finalOrder = {
                ProductID: req.body.productId,
                email: req.body.email,
                phone: req.body.phone,
                paidStatus: false,
                tranjectionId: tran_id,
            }
            const result = await orderCollection2.create(finalOrder)
    
            console.log('Redirecting to: ', GatewayPageURL)
        });
    
    

}

const updateOrder2 = async(req,res)=>{
    const result = await orderCollection2.findOneAndUpdate({ tranjectionId: req.params.tranId2 }, {
        $set: {
            paidStatus: true,
        }
    }, {
        new: true
    })
    // console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `https://quick-fit-client.vercel.app/payment/success/${req.params.tranId2}`
        )
    }
}

const deleteOrder2 = async(req,res)=>{
    const result = await orderCollection2.findOneAndDelete({ tranjectionId: req.params.tranId2 })
    //console.log(result);
    if (result.email) {
        res.redirect(
            `https://quick-fit-client.vercel.app/payment/error/${req.params.tranId2}`
        )
    }
}


module.exports = {
    order2,
    updateOrder2,
    deleteOrder2
}
