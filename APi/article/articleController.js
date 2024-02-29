//mongoose model (articles)
const articleCollection = require("../../Database/Schema/articles/artiles")

const getArticleData = async(req,res) =>{
    const result =  await articleCollection.find();
    res.send(result);
}

const getArticleSingleData = async(req,res) =>{
    const id = req.params.id;
    const result = await  articleCollection.findById(id);
   
    res.send(result);
}


module.exports = {
    getArticleData, getArticleSingleData
};