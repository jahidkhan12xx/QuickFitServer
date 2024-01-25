//mongoose model (articles)
const articleCollection = require("../../Database/Schema/articles/artiles")

const getArticleData = () =>{
    const res =  articleCollection.find();
    return res;
}

const getArticleSingleData = (id) =>{
    const res =  articleCollection.findById(id);
    return res;
}


module.exports = {
    getArticleData, getArticleSingleData
};