const { default: mongoose } = require("mongoose");
const servicesCollection = require("../../Database/Schema/services/services");

const getServicesData = () =>{
    const res = servicesCollection.find()
    return res;
}

module.exports = {
    getServicesData
};