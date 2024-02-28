const { default: mongoose } = require("mongoose");
const servicesCollection = require("../../Database/Schema/services/services");

const getServicesData = async (req,res) =>{
    const result = await servicesCollection.find()
    res.send(result);
}

module.exports = {
    getServicesData
};