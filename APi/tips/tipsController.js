const tipsCollection =require("../../Database/Schema/tips/tips")

const getTipsData = () =>{
    const res = tipsCollection.find()
    return res
}

module.exports={
    getTipsData
}