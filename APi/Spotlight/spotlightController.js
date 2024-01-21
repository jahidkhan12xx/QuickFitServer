const spotLight = require("../../Database/Schema/Spotlight/spotLight")

const getSpotlightData = () =>{
    const res = spotLight.find();
    return res;
}


module.exports = {
    getSpotlightData
}