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
const postArticleData = async (data) => {
    const res =  await articleCollection.create(data)
    return res
  }

  const deleteArticleData = async (id)=> {
    const res = await articleCollection.findByIdAndDelete(id)
    return res;
  }


module.exports = {
    getArticleData, getArticleSingleData,postArticleData,deleteArticleData
};