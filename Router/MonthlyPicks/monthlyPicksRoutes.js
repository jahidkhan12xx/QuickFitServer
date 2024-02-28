const express = require("express")
const { getMonthlyData, getMonthlySingleData, getMonthlyAuthorWiseData, addMonthlyPicks } = require("../../Api/MonthlyPicks/monthlyPicksController")

const router = express.Router()


router.get("/api/v1/monthlyPicks",getMonthlyData)
router.get("/api/v1/monthlyPicks/:id",getMonthlySingleData)
router.get("/api/v1/monthlyPicksData/:author",getMonthlyAuthorWiseData)
router.post("/api/v1/monthlyPicks",addMonthlyPicks)

module.exports = router