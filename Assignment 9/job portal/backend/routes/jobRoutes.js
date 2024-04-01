// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// Route for creating a new job
router.post("/create/job", jobController.createJob);
router.get("/getAllJobs", jobController.getAllJobs);
module.exports = router;
