//mongoose model (monthPicks)
const MonthPicks = require("../../Database/Schema/MonthPicks/MonthPicks")

const getMonthlyData = () =>{
    const res =  MonthPicks.find();
    return res;
}


module.exports = {
    getMonthlyData
};