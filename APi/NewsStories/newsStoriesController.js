const newsStories = require("../../Database/Schema/NewsStories/newsStories")


const getNewStories = () =>{
    const res = newsStories.find();
    return res;
}

const getSingleStory = (id) =>{
    const res = newsStories.findById(id);
    return res;
}


module.exports = {
    getNewStories, getSingleStory
};