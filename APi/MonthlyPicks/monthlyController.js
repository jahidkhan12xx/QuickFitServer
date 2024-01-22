//mongoose model (monthPicks)
const MonthPicks = require("../../Database/Schema/MonthPicks/MonthPicks")

const getMonthlyData = () =>{
    const res =  MonthPicks.find();
    return res;
}

const getMonthlySigleData = (id) =>{
    const res = MonthPicks.findById(id)
    return res
}

module.exports = {
    getMonthlyData, getMonthlySigleData
};