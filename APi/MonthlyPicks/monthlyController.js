//mongoose model (monthPicks)
const MonthPicks = require("../../Database/Schema/MonthPicks/MonthPicks")


const addMonthlyPicks = (data) =>{
    const res = MonthPicks.create(data);
    return res;
}

const getMonthlyData = () =>{
    const res =  MonthPicks.find();
    return res;
}

const getMonthlySigleData = (id) =>{
    const res = MonthPicks.findById(id)
    return res
}
const getMonthlyAuthorWiseData = (author) =>{
    const res = MonthPicks.find({author})
    return res
}

module.exports = {
    getMonthlyData, getMonthlySigleData, addMonthlyPicks,getMonthlyAuthorWiseData
};