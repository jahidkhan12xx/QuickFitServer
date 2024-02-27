const workout = require("../../Database/Schema/Workout/workout")

const getWorkoutData = async(req,res) =>{
    const result = await workout.find();
    res.send(result);
}

const getSingleWorkoutData = async(req,res) =>{
    const id = req.params.id;
    const result = await workout.findOne({category:id})
    res.send(result)
}

module.exports = {
    getWorkoutData, getSingleWorkoutData
}