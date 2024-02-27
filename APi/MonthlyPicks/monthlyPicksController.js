//mongoose model (monthPicks)
const MonthPicks = require("../../Database/Schema/MonthPicks/MonthPicks")


const addMonthlyPicks = async(req,res) =>{
    const data = req.body;
    const result = await MonthPicks.create(data);
    res.send(result);
}

const getMonthlyData = async(req,res) =>{
    const result = await  MonthPicks.find();
    res.send(result);
}

const getMonthlySingleData = async(req,res) =>{
    const id = req.params.id;
    const result = await MonthPicks.findById(id)
    res.send(result)
}
const getMonthlyAuthorWiseData = async(req,res) =>{
    const author = req.params.author;
    const result = await MonthPicks.find({author})
    res.send(result)
}

module.exports = {
    getMonthlyData, getMonthlySingleData, addMonthlyPicks,getMonthlyAuthorWiseData
};