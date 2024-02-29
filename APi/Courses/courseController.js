const courseCollection = require("../../Database/Schema/courses/courses")


const getCoursesAllData = async () => {
    const result = await courseCollection.find()
    return result
  }

// const getCoursesCategoryData = async (req, res) => {
//   const result = await courseCollection.find({category:req.params.category})
//   res.send(result)
// }

// const getCoursesSingleData = async (req, res) => {
//     const result = await courseCollection.findById(req.params.id)
//     res.send(result)
//   }

module.exports={getCoursesAllData}