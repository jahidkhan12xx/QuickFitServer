const category = require("../../Database/Schema/Category/category")

const getCategoryData = () =>{
    const res = category.find();
    return res;
}

const getSingleCategoryData = (id) =>{
    const res = category.findOne({category:id})
    return res
}

module.exports = {
    getCategoryData, getSingleCategoryData
}