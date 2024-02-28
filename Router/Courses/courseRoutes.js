const express = require("express")
const { getCoursesAllData, getCoursesCategoryData, getCoursesSingleData } = require("../../APi/Courses/courseController")

const router = express.Router()

router.get("/api/v1/courses", getCoursesAllData)
router.get("/api/v1/courses/category/:category", getCoursesCategoryData)
router.get("/api/v1/courses/:id", getCoursesSingleData)



module.exports = router ;