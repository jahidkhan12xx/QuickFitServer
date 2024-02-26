const category = require("../../Database/Schema/Category/category.js")

const getCategoryData = async (req,res) =>{
    const result = await category.find();
    res.send(result);
}

const getSingleCategoryData = async (req,res) =>{
    const id = req.params.id;
    const result = await category.findOne({category:id})
    res.send(result)
}

module.exports = {
    getCategoryData, getSingleCategoryData
}