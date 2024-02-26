const { default: mongoose } = require("mongoose");
const expertsCollection = require("../../Database/Schema/experts/experts");

const getExpertsData = async (req,res) => {
    const result = await expertsCollection.find()
    res.send(result);
}

module.exports = {
    getExpertsData
}