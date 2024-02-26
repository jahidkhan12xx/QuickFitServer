const trainerCollection = require("../../Database/Schema/trainer/trainer.js")

const postTrainerData = async (req,res) => {
    const trainer = req.body
    const result = await trainerCollection.create(trainer)
    res.send(result)
}

module.exports = {postTrainerData}