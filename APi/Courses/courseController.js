const courseCollection = require("../../Database/Schema/courses/courses")


<<<<<<< HEAD
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
=======
const getCoursesAllData = async (req, res) => {
    const result = await courseCollection.find()
    res.send(result)
  }

const getCoursesCategoryData = async (req, res) => {
  const result = await courseCollection.find({category:req.params.category})
  res.send(result)
}

const getCoursesSingleData = async (req, res) => {
    const result = await courseCollection.findById(req.params.id)
    res.send(result)
  }

module.exports={getCoursesAllData, getCoursesCategoryData, getCoursesSingleData}
>>>>>>> 7d9e76c5a1da32f898269916485389b984b269a5
