

const trainerCollection = require("../../Database/Schema/trainer/trainer")

const postTrainerData = (data) => {
    console.log(data)
    const res = trainerCollection.create(data)
    return res
}

const getTrainerData = () =>{
    const res = trainerCollection.find()
    return res
}

module.exports = {postTrainerData,getTrainerData}