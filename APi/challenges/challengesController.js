const challengesCollection =require("../../Database/Schema/challenges/challenges")

const getChallengesData = () =>{
    const res = challengesCollection.find()
    return res
}

module.exports={
    getChallengesData
}