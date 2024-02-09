

const trainerCollection = require("../../Database/Schema/trainer/trainer")

const postTrainerData = (data) => {
    console.log(data)
    const res = trainerCollection.create(data)
    return res
}

module.exports = {postTrainerData}