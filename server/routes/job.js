const express = require("express");

const router = express.Router();

//import functions
const {
   allJobs,
  readJob
} = require("../controllers/job");

router.get('/all-jobs', allJobs);
router.get('/read-job/:id', readJob);

module.exports = router;