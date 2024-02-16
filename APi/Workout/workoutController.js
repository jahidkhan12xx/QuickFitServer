const workout = require("../../Database/Schema/Workout/workout")

const getWorkoutData = () =>{
    const res = workout.find();
    return res;
}

const getSingleWorkoutData = (id) =>{
    const res = workout.findOne({category:id})
    return res
}

module.exports = {
    getWorkoutData, getSingleWorkoutData
}