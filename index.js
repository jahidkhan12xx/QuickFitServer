const express = require('express')
require('dotenv').config()
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");
const port = 3001



const { getMonthlyData, getMonthlySigleData } = require('./APi/MonthlyPicks/monthlyController');
const { getNewStories, getSingleStory } = require('./APi/NewsStories/newsStoriesController');
const { getSpotlightData, getSpotlightSingleData } = require('./APi/Spotlight/spotlightController');
const { getCategoryData, getSingleCategoryData } = require('./APi/Category/categoryController');
const { getArticleData, getArticleSingleData } = require('./APi/article/articleController');
const { getEshopData, getEshopSingleData, getEshopAllData } = require('./APi/EshopProducts/eshopController');
const { getBookData } = require('./APi/books/booksController');
const { getCartData, postCartData, getCartAllData } = require('./APi/cart/cartController');
const { getTipsData } = require('./APi/tips/tipsController');

const SSLCommerzPayment = require('sslcommerz-lts');
const { postOrderData, updateOrderData, deleteOrderData } = require('./APi/orders/orders');




//********* Middleware's Starts Heree *********//


app.use(cors())
app.use(express.json())



//********* Middleware's Ends Here *********//



//********* Database Connection Here *********//



mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', () => {
    console.log("database connected");
})

// disable auto pluralize
mongoose.pluralize(null);

//********* Database Connection Ends Here *********//

// payment method start here

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false //true for live, false for sandbox





//************   All APi's Starts   ************************//


// ---------Payment Method APi's starts ------------

app.post("/api/v1/order", async (req, res) => {
    const id = req.body.productId
    console.log(id)
    const product = await getEshopSingleData(id)
    const productPrice = parseInt(product?.price)
    console.log(productPrice);
    const tran_id = Date.now()
    console.log(tran_id)
    const data = {
        total_amount: productPrice,
        currency: 'BDT',
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `http://localhost:3001/api/v1/order/success/${tran_id}`,
        fail_url: `http://localhost:3001/api/v1/order/failed/${tran_id}`,
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
    console.log(data);
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.send({ url: GatewayPageURL })

        const finalOrder = {
            ProductID: req.body.productId,
            email: req.body.email,
            phone: req.body.phone,
            title: product.title,
            paidStatus: false,
            tranjectionId: tran_id,
        }
        const result = postOrderData(finalOrder)

        console.log('Redirecting to: ', GatewayPageURL)
    });

});

// success payment api -----
app.post("/api/v1/order/success/:tranId", async (req, res) => {
    const result = await updateOrderData(req.params.tranId)
    console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `http://localhost:3000/payment/success/${req.params.tranId}`
        )
    }

})

// failed payment api -----
app.post("/api/v1/order/failed/:tranId", async (req, res) => {

    const result = await deleteOrderData(req.params.tranId)
    console.log(result);
    if (result._id) {
        res.redirect(
            `http://localhost:3000/payment/error/${req.params.tranId}`
        )
    }
})
// ---------Payment Method APi's END ------------




//article api's starts--------
app.get("/api/v1/articles", async (req, res) => {
    const result = await getArticleData();
    res.send(result)
})

app.get("/api/v1/articles/:id", async (req, res) => {
    const id = req.params.id
    const result = await getArticleSingleData(id)
    res.send(result)
})
//article api's ends--------



//Monthly Picks Api's starts------
app.get("/api/v1/monthlyPicks", async (req, res) => {
    const result = await getMonthlyData();
    res.send(result);
})

app.get("/api/v1/monthlyPicks/:id", async (req, res) => {
    const id = req.params.id
    const result = await getMonthlySigleData(id)
    res.send(result)
})
//Monthly Picks Api's ends------



//News Stories Api's starts ------
app.get("/api/v1/newStories", async (req, res) => {
    const result = await getNewStories();
    res.send(result);
})

app.get("/api/v1/newStories/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSingleStory(id)
    res.send(result)
})
//News Stories Api's ends ------




//Spotlight Api's starts------
app.get("/api/v1/spotlight", async (req, res) => {
    const result = await getSpotlightData();
    res.send(result);
})

app.get("/api/v1/spotlight/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSpotlightSingleData(id)
    res.send(result)
})
//Spotlight Api's ends------



// Category Api's starts--------
app.get("/api/v1/category", async (req, res) => {
    const result = await getCategoryData();
    res.send(result);
})

app.get("/api/v1/category/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSingleCategoryData(id)
    res.send(result)
})
// Category Api's ends--------



// eshop product api's starts--------
app.get("/api/v1/eshop/:id", async (req, res) => {
    const id = req.params.id
    const result = await getEshopData(id)
    res.send(result)
})

app.get("/api/v1/eshop/data/:id", async (req, res) => {
    const id = req.params.id
    const result = await getEshopSingleData(id)
    res.send(result)
})

app.get("/api/v1/eshop", async(req, res)=>{
    const result = await getEshopAllData()
    res.send(result)
})
// eshop product api's ends--------




// book collection api's starts------
app.get("/api/v1/books/:id", async (req, res) => {
    const id = req.params.id
    const result = await getBookData(id)
    res.send(result)
})
// book collection api's ends------




// cart api's starts--------
app.get("/api/v1/cart/:id", async (req, res)=>{
    const id = req.params.id
    const result = await getCartData(id)
    res.send(result)
})

app.get("/api/v1/cart", async (req, res)=>{
    const id = req.params.id
    const result = await getCartAllData()
    res.send(result)
})

app.post("/api/v1/cart", async(req, res)=>{
    const sendProduct = req.body 
    const result = await postCartData(sendProduct) ;
    res.send(result)
})
// cart api's ends--------




//tips api starts-------
app.get("/api/v1/tips", async (req, res) => {
    const result = await getTipsData()
    res.send(result)
})
//tips api ends-------




//*********   All APi's Ends here   ************************//



//*********   Common api's here   ************************//

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//*********   Common api's ends here   ************************//