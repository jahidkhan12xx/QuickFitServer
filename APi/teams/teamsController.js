const { default: mongoose } = require("mongoose");
const teamsCollection = require("../../Database/Schema/teams/teams");

const getTeamsData = () =>{
    const res = teamsCollection.find()
    return res;
}

module.exports = {
    getTeamsData
}