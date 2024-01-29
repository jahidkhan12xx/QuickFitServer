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
const { getEshopData, getEshopSingleData } = require('./APi/EshopProducts/eshopController');
const { getBookData } = require('./APi/books/booksController');
const { getCartData, postCartData } = require('./APi/cart/cartController');
const { getTipsData } = require('./APi/tips/tipsController');
const SSLCommerzPayment = require('sslcommerz-lts')



//********* Middleware's Starts Heree *********//


app.use(cors())
app.use(express.json())



//********* Middleware's Ends Here *********//


// payment method

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false //true for live, false for sandbox






//********* Database Connection Here *********//



mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected',()=>{
    console.log("database connected");
})

// disable auto pluralize
mongoose.pluralize(null);

//********* Database Connection Ends Here *********//







//************   All APi's Starts   ************************//


// payments method api 
app.post("/order", async(req, res)=>{
    const id = req.body.productId;
    console.log(id)
    const product = await getEshopSingleData(id)
    console.log(product)
    // const data = {
    //     total_amount: 100,
    //     currency: 'BDT',
    //     tran_id: 'REF123', // use unique tran_id for each api call
    //     success_url: 'http://localhost:3030/success',
    //     fail_url: 'http://localhost:3030/fail',
    //     cancel_url: 'http://localhost:3030/cancel',
    //     ipn_url: 'http://localhost:3030/ipn',
    //     shipping_method: 'Courier',
    //     product_name: 'Computer.',
    //     product_category: 'Electronic',
    //     product_profile: 'general',
    //     cus_name: 'Customer Name',
    //     cus_email: 'customer@example.com',
    //     cus_add1: 'Dhaka',
    //     cus_add2: 'Dhaka',
    //     cus_city: 'Dhaka',
    //     cus_state: 'Dhaka',
    //     cus_postcode: '1000',
    //     cus_country: 'Bangladesh',
    //     cus_phone: '01711111111',
    //     cus_fax: '01711111111',
    //     ship_name: 'Customer Name',
    //     ship_add1: 'Dhaka',
    //     ship_add2: 'Dhaka',
    //     ship_city: 'Dhaka',
    //     ship_state: 'Dhaka',
    //     ship_postcode: 1000,
    //     ship_country: 'Bangladesh',
    // };
    // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    // sslcz.init(data).then(apiResponse => {
    //     // Redirect the user to payment gateway
    //     let GatewayPageURL = apiResponse.GatewayPageURL
    //     res.redirect(GatewayPageURL)
    //     console.log('Redirecting to: ', GatewayPageURL)
    // });
    
    
})


//article api's

app.get("/api/v1/articles", async(req, res)=>{
    const result = await getArticleData();
    res.send(result)
})

app.get("/api/v1/articles/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getArticleSingleData(id)
    res.send(result)
})


//Monthly Picks Api's


app.get("/api/v1/monthlyPicks", async(req,res)=>{
    const result = await getMonthlyData();
    res.send(result);
})

app.get("/api/v1/monthlyPicks/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getMonthlySigleData(id)
    res.send(result)
})

//News Stories Api's


app.get("/api/v1/newStories", async(req,res)=>{
    const result = await getNewStories();
    res.send(result);
})

app.get("/api/v1/newStories/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getSingleStory(id)
    res.send(result)
})

//Spotlight Api's

app.get("/api/v1/spotlight",async(req,res)=>{
    const result = await getSpotlightData();
    res.send(result);
})

app.get("/api/v1/spotlight/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getSpotlightSingleData(id)
    res.send(result)
})


// Category Api's

app.get("/api/v1/category", async(req,res)=>{
    const result = await getCategoryData();
    res.send(result);
})

app.get("/api/v1/category/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getSingleCategoryData(id) 
    res.send(result)
})


// eshop product api's 

app.get("/api/v1/eshop/:id", async(req, res)=>{
    const id = req.params.id
    const result = await getEshopData(id)
    res.send(result)
})

app.get("/api/v1/eshop/data/:id", async(req, res)=>{
    const id = req.params.id 
    const result = await getEshopSingleData(id)
    res.send(result)
})


// book collection api's 
app.get("/api/v1/books/:id", async (req, res)=>{
    const id = req.params.id
    const result = await getBookData(id)
    res.send(result)
})


// cart api's
app.post("/api/v1/cart", async(req, res)=>{
    const product = req.body 
    const result = await postCartData(product) ;
    res.send(result)
})
//tips api
app.get("/api/v1/tips",async(req,res)=>{
    const result = await getTipsData()
    res.send(result)
})


app.get("/api/v1/cart/:id", async (req, res)=>{
    const id = req.params.id
    const result = await getCartData(id)
    res.send(result)
})

//*********   All APi's Ends here   ************************//



//*********   Common api's here   ************************//

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//*********   Common api's ends here   ************************//