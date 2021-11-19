const express = require("express");

const router = express.Router();

//import functions
const {
  allJobInvites,
  JobInvites,
  searchJobInvites,
  jobInvite
} = require("../controllers/jobinvite");

router.post('/all-jobinvites', allJobInvites);
router.post('/search-jobinvites', searchJobInvites);
router.get('/all-invites',JobInvites );
router.get('/job-invite/:id',jobInvite );



module.exports = router;