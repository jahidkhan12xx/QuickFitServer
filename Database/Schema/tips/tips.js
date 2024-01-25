const { default:mongoose } =require("mongoose");

const tipsSchema = new mongoose.Schema({
    title:String,
    details:Object
})

module.exports = mongoose.model("tip" ,tipsSchema,"tips")