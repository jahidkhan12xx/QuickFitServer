const { default: mongoose } = require("mongoose");
const expertsCollection = require("../../Database/Schema/experts/experts");

const getExpertsData = () => {
    const res = expertsCollection.find()
    return res;
}

module.exports = {
    getExpertsData
}