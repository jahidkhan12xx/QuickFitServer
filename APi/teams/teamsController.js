const { default: mongoose } = require("mongoose");
const teamsCollection = require("../../Database/Schema/teams/teams");

const getTeamsData = async(req,res) =>{
    const result = await teamsCollection.find()
    res.send(result);
}

module.exports = {
    getTeamsData
}