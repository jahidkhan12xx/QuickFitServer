const tipsCollection =require("../../Database/Schema/tips/tips.js")

const getTipsData = async(req,res) =>{
    const result = await tipsCollection.find()
    res.send(result)
}

module.exports={
    getTipsData
}