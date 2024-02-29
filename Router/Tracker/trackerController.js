const express = require("express");
const {
  postTrackerData,
  updateTrackerData,
  getTrackerData,
  getCurrentTrackerData,
  getSingleTrackerData,
  deleteTrackerData,
  getPreviousTrackerData,
} = require("../../Api/Tracker/trackerController");

const router = express.Router();

router.post("/api/v1/tracker", postTrackerData);
router.patch("/api/v1/tracker/update/:id", updateTrackerData);
router.get("/api/v1/tracker/:email", getTrackerData);
router.get("/api/v1/tracker/date/:email", getCurrentTrackerData);
router.get("/api/v1/tracker/single/:id", getSingleTrackerData);
router.delete("/api/v1/tracker/:id", deleteTrackerData);
router.get("/api/v1/tracker/history/:email", getPreviousTrackerData);

module.exports = router;
