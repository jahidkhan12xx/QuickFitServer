const courseCollection = require("../../Database/Schema/courses/courses")
const courseDetailsCollection = require("../../Database/Schema/courses/courseDetails")


const getCoursesAllData = async () => {
    const result = await courseCollection.find()
    return (result)
  }

const getCoursesCategoryData = async (cat) => {
  const result = await courseCollection.find({category:cat})
  return (result)
}

const getCoursesSingleData = async () => {
    const result = await courseCollection.findById(req.params.id)
    return (result)
  }

const getCourseDetailsAllData = async () => {
  const result = await courseDetailsCollection.find()
  return (result)
}

module.exports={getCoursesAllData, getCoursesCategoryData, getCoursesSingleData, getCourseDetailsAllData}