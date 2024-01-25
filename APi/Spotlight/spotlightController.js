const spotLight = require("../../Database/Schema/Spotlight/spotLight")

const getSpotlightData = () =>{
    const res = spotLight.find();
    return res;
}

const getSpotlightSingleData = (id) =>{
    const res = spotLight.findById(id)
    return res;
}

module.exports = {
    getSpotlightData, getSpotlightSingleData
}