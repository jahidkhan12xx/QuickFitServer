const spotLight = require("../../Database/Schema/Spotlight/spotLight.js")

const getSpotlightData = async (req,res) =>{
    const result = await spotLight.find();
    res.send(result);
}

const getSpotlightSingleData = async (req,res) =>{
    const id = req.params.id;
    const result = await spotLight.findById(id)
    res.send(result);
}

module.exports = {
    getSpotlightData, getSpotlightSingleData
}