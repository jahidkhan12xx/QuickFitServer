const category = require("../../Database/Schema/Category/category")

const getCategoryData = () =>{
    const res = category.find();
    return res;
}

module.exports = {
    getCategoryData
}