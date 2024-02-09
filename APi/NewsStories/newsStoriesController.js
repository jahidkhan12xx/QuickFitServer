const newsStories = require("../../Database/Schema/NewsStories/newsStories")


const getNewStories = () =>{
    const res = newsStories.find();
    return res;
}

const getSingleStory = (id) =>{
    const res = newsStories.findById(id);
    return res;
}

const getAuthorWiseStory = (author)=>{
    const res = newsStories.find({author});
    return res;
}

const addStory = (data) =>{
    const res = newsStories.create(data);
    return res;
}


module.exports = {
    getNewStories, getSingleStory,addStory,getAuthorWiseStory
};