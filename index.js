const express = require('express')
require('dotenv').config()
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");
const port = 3000



const { getMonthlyData, getMonthlySigleData } = require('./APi/MonthlyPicks/monthlyController');
const { getNewStories, getSingleStory } = require('./APi/NewsStories/newsStoriesController');
const { getSpotlightData, getSpotlightSingleData } = require('./APi/Spotlight/spotlightController');
const { getCategoryData, getSingleCategoryData } = require('./APi/Category/categoryController');
const { getArticleData, getArticleSingleData } = require('./APi/article/articleController');
const { getEshopData, getEshopSingleData } = require('./APi/EshopProducts/eshopController');
const { getBookData } = require('./APi/books/booksController');
const { getCartData, postCartData } = require('./APi/cart/cartController');




//********* Middleware's Starts Heree *********//


app.use(cors())
app.use(express.json())



//********* Middleware's Ends Here *********//



//********* Database Connection Here *********//



mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected',()=>{
    console.log("database connected");
})

// disable auto pluralize
mongoose.pluralize(null);

//********* Database Connection Ends Here *********//







//************   All APi's Starts   ************************//


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