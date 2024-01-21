const express = require('express')
require('dotenv').config()
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");
const port = 3000



const { getMonthlyData } = require('./APi/MonthlyPicks/monthlyController');
const { getNewStories } = require('./APi/NewsStories/newsStoriesController');
const { getSpotlightData } = require('./APi/Spotlight/spotlightController');
const { getCategoryData } = require('./APi/Category/categoryController');




//********* Middleware's Starts Here *********//


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





//Monthly Picks Api's


app.get("/api/v1/monthlyPicks", async(req,res)=>{
    const result = await getMonthlyData();
    res.send(result);
})


//News Stories Api's


app.get("/api/v1/newStories", async(req,res)=>{
    const result = await getNewStories();
    res.send(result);
})

//Spotlight Api's

app.get("/api/v1/spotlight",async(req,res)=>{
    const result = await getSpotlightData();
    res.send(result);
})

// Category Ap's

app.get("/api/v1/category", async(req,res)=>{
    const result = await getCategoryData();
    res.send(result);
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