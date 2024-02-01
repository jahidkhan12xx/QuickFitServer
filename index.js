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
const { getBookData } = require('./APi/books/booksController');
const { getCartData, postCartData } = require('./APi/cart/cartController');
const { getTipsData } = require('./APi/tips/tipsController');
const { addFavourites, getFavourites, deleteFavourites } = require('./APi/Favourite/favouriteController');
const { updateLikes } = require('./APi/userInteraction/userInteractionController');
const { addComment, getComment } = require('./APi/Comment/commentController');




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

//*********   All APi's Ends here   ************************//



//*********   Common api's here   ************************//

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//*********   Common api's ends here   ************************//