const eshopCollection = require("../../Database/Schema/EshopProducts/eshopProducts")

const getEshopData=(id)=>{
  const res = eshopCollection.find({category:id})
  return res ;
}

const getEshopSingleData=(id)=>{
    const res = eshopCollection.findById(id)
    return res ;
  }

module.exports = {
    getEshopData, getEshopSingleData
}