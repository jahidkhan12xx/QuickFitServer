const express = require('express')
require('dotenv').config()
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");
const port = 4000




const { getMonthlyData, getMonthlySigleData } = require('./APi/MonthlyPicks/monthlyController');
const { getNewStories, getSingleStory } = require('./APi/NewsStories/newsStoriesController');
const { getSpotlightData, getSpotlightSingleData } = require('./APi/Spotlight/spotlightController');
const { getCategoryData, getSingleCategoryData } = require('./APi/Category/categoryController');
const { getArticleData, getArticleSingleData } = require('./APi/article/articleController');
const { getEshopData, getEshopSingleData } = require('./APi/EshopProducts/eshopController');
const { getBookData, getSingleBookData } = require('./APi/books/booksController');
const { getCartData, postCartData } = require('./APi/cart/cartController');
const { getTipsData } = require('./APi/tips/tipsController');

const { addFavourites, getFavourites, deleteFavourites } = require('./APi/Favourite/favouriteController');
const { updateLikes } = require('./APi/userInteraction/userInteractionController');
const { addComment, getComment } = require('./APi/Comment/commentController');

const { getTeamsData } = require('./APi/teams/teamsController');
const { getExpertsData } = require('./APi/experts/expertsController');

const SSLCommerzPayment = require('sslcommerz-lts');
const { postOrderData, updateOrderData, deleteOrderData } = require('./APi/orders/orders');
const { postOrderData3, updateOrderData3, deleteOrderData3 } = require('./APi/orders/orders3');
const { addUser, getAllUser, getSingleUser } = require('./APi/user/userController');





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

// Payment Method APi's 
// E-shop payment
app.post("/api/v1/order", async (req, res) => {
    const id = req.body.productId
    const product = await getEshopSingleData(id)
    const productPrice = parseInt(product.price)
    console.log(productPrice);
    const tran_id = Date.now()

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


app.post("/api/v1/order/success/:tranId", async (req, res) => {
    const result = await updateOrderData(req.params.tranId)
    console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `http://localhost:3000/payment/success/${req.params.tranId}`
        )
    }

})


app.post("/api/v1/order/failed/:tranId", async (req, res) => {

    const result = await deleteOrderData(req.params.tranId)
    console.log(result);
    if (result._id) {
        res.redirect(
            `http://localhost:3000/payment/error/${req.params.tranId}`
        )
    }
})

// diet-plan payment
app.post("/api/v1/order2", async (req, res) => {
    const price = req.body.productId
    //const product = await getEshopSingleData(id)
    const productPrice = parseInt(price)
    const tran_id = Date.now()
    //console.log(productPrice);

    const data = {
        total_amount: productPrice,
        currency: 'BDT',
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `http://localhost:3001/api/v1/order2/success/${tran_id}`,
        fail_url: `http://localhost:3001/api/v1/order2/failed/${tran_id}`,
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
    sslcz.init(data).then(apiResponse => {
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
        const result = postOrderData2(finalOrder)

        console.log('Redirecting to: ', GatewayPageURL)
    });

});

app.post("/api/v1/order2/success/:tranId2", async (req, res) => {
    const result = await updateOrderData2(req.params.tranId2)
    console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `http://localhost:3000/payment/success/${req.params.tranId2}`
        )
    }

})


app.post("/api/v1/order2/failed/:tranId2", async (req, res) => {

    const result = await deleteOrderData2(req.params.tranId2)
    console.log(result);
    if (result.email) {
        res.redirect(
            `http://localhost:3000/payment/error/${req.params.tranId2}`
        )
    }
})



 //************   Payment Gateway for books  ************************//

app.post("/api/v1/order3", async (req, res) => {
    const id = req.body.productId
    const bookPrice=req.body.price
    console.log(id)
    const product = await getSingleBookData(id)
    const productPrice = parseInt(bookPrice)
    console.log(productPrice);
    console.log(product)
    const tran_id = Date.now()

    const data = {
        total_amount: productPrice,
        currency: 'BDT',
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `http://localhost:3001/api/v1/order3/success/${tran_id}`,
        fail_url: `http://localhost:3001/api/v1/order3/failed/${tran_id}`,
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: product?.BookName,
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
    sslcz.init(data).then(apiResponse => {
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
        const result = postOrderData3(finalOrder)
        console.log(result)

        console.log('Redirecting to: ', GatewayPageURL)
    });

});


app.post("/api/v1/order3/success/:tranId3", async (req, res) => {
    const result = await updateOrderData3(req.params.tranId3)
    console.log(result);
    if (result.paidStatus) {
        res.redirect(
            `http://localhost:3000/payment/success/${req.params.tranId3}`
        )
    }

})


app.post("/api/v1/order3/failed/:tranId3", async (req, res) => {

    const result = await deleteOrderData3(req.params.tranId3)
    console.log(result);
    if (result._id) {
        res.redirect(
            `http://localhost:3000/payment/error/${req.params.tranId3}`
        )
    }
})



//article api's

app.get("/api/v1/articles", async (req, res) => {
    const result = await getArticleData();
    res.send(result)
})

app.get("/api/v1/articles/:id", async (req, res) => {
    const id = req.params.id
    const result = await getArticleSingleData(id)
    res.send(result)
})


//Monthly Picks Api's


app.get("/api/v1/monthlyPicks", async (req, res) => {
    const result = await getMonthlyData();
    res.send(result);
})

app.get("/api/v1/monthlyPicks/:id", async (req, res) => {
    const id = req.params.id
    const result = await getMonthlySigleData(id)
    res.send(result)
})

//News Stories Api's


app.get("/api/v1/newStories", async (req, res) => {
    const result = await getNewStories();
    res.send(result);
})

app.get("/api/v1/newStories/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSingleStory(id)
    res.send(result)
})

//Spotlight Api's

app.get("/api/v1/spotlight", async (req, res) => {
    const result = await getSpotlightData();
    res.send(result);
})

app.get("/api/v1/spotlight/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSpotlightSingleData(id)
    res.send(result)
})


// Category Api's

app.get("/api/v1/category", async (req, res) => {
    const result = await getCategoryData();
    res.send(result);
})

app.get("/api/v1/category/:id", async (req, res) => {
    const id = req.params.id
    const result = await getSingleCategoryData(id)
    res.send(result)
})


// eshop product api's 

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


// book collection api's 
app.get("/api/v1/books/:id", async (req, res) => {
    const id = req.params.id
    const result = await getBookData(id)
    res.send(result)
})


// cart api's
app.post("/api/v1/cart", async (req, res) => {
    const product = req.body
    const result = await postCartData(product);
    res.send(result)
})
//tips api
app.get("/api/v1/tips", async (req, res) => {
    const result = await getTipsData()
    res.send(result)
})


app.get("/api/v1/cart/:id", async (req, res) => {
    const id = req.params.id
    const result = await getCartData(id)
    res.send(result)
})



//Favourite api's

app.post("/api/v1/favourites", async(req,res)=>{
    const data = req.body;
    const email = data.email;

    // console.log(data,email);
    const result = await addFavourites(data,email);
    console.log(result);
    res.send({insertedId:result?._id});
})

app.get("/api/v1/favourites/:email", async(req,res)=>{
    const userEmail = req.params.email;
    const result = await getFavourites(userEmail);
    res.send(result);
})


app.delete("/api/v1/favourites/:id", async(req,res)=>{
    const favId = req.params.id;
    const result = await deleteFavourites(favId);
    res.send(result);
})



//UserInteraction




app.patch("/api/v1/likes/:email", async(req,res)=>{
    const email =req.params.email;
    console.log(email);
    const result = await updateLikes(email);
    console.log(result);
    res.send(result);
})



//Comment 


app.post("/api/v1/comments",async(req,res)=>{
    const comment = req.body;
    const result = await addComment(comment);
    res.send(result);
})

app.get("/api/v1/comments/:blogId", async(req,res)=>{
    const blogId = req.params.blogId;
    const result = await getComment(blogId);
    res.send(result)
})


//user api's

app.post("/api/v1/users", async(req,res)=>{
    const data = req.body;
    console.log(data);
    const result = await addUser(data);
    res.send(result);
})

app.get("/api/v1/users", async(req,res)=>{
    const result = await getAllUser();
    res.send(result);
})

app.get("/api/v1/users/:email", async(req,res)=>{
    const result = await getSingleUser(req.params.email);
    res.send(result);
})

//*********   All APi's Ends here   ************************//



//*********   Teams APi's start here   ************************//

app.get("/api/v1/teams", async (req, res) => {
    const result = await getTeamsData()
    res.send(result)
})

//*********   Teams APi's Ends here   ************************//

//*********   Experts APi's start here   ************************//

app.get("/api/v1/experts", async (req, res) => {
    const result = await getExpertsData()
    res.send(result)
})

//*********   Experts APi's Ends here   ************************//








//*********   Common api's here   ************************//

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//*********   Common api's ends here   ************************//