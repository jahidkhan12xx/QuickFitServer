const courseCollection = require("../../Database/Schema/courses/courses")


const getCoursesAllData = async () => {
    const result = await courseCollection.find()
    return (result)
  }

const getCoursesCategoryData = async () => {
  const result = await courseCollection.find({category:req.params.category})
  return (result)
}

const getCoursesSingleData = async () => {
    const result = await courseCollection.findById(req.params.id)
    return (result)
  }

module.exports={getCoursesAllData, getCoursesCategoryData, getCoursesSingleData}