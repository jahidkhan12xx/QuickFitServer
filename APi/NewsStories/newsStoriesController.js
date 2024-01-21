const newsStories = require("../../Database/Schema/NewsStories/newsStories")


const getNewStories = () =>{
    const res = newsStories.find();
    return res;
}


module.exports = {
    getNewStories
};