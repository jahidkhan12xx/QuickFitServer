const eshopCollection = require("../../Database/Schema/EshopProducts/eshopProducts.js")

const getEshopData= async (req,res)=>{
    const id = req.params.id;
  const result = await eshopCollection.find({category:id})
  res.send(result) ;
}

const getEshopAllData= async (req,res)=>{
    
  const result = await eshopCollection.find().sort({date:-1})
  res.send(result) ;
}

const getEshopSingleData= async (req,res)=>{
    const id = req.params.id

    const result = await eshopCollection.findById(id)
    res.send(result) ;
  }

module.exports = {
    getEshopData, getEshopSingleData, getEshopAllData
}