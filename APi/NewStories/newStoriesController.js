const newsStories = require("../../Database/Schema/NewsStories/newsStories.js")


const getNewStories = async (req,res) =>{
    const result = await newsStories.find();
    res.send(result);
}

const getSingleStory = async (req,res) =>{
    const id = req.params.id;
    const result = await newsStories.findById(id);
    res.send(result);
}

const getAuthorWiseStory = async (req,res)=>{
    const author = req.params.author;
    const result = await newsStories.find({author});
    res.send(result);
}

const addStory = async (req,res) =>{
    const data = req.body;
    const result = await newsStories.create(data);
    res.send(result);
}


module.exports = {
    getNewStories, getSingleStory,addStory,getAuthorWiseStory
};