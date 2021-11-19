const express = require("express");

const router = express.Router();

//import functions
const {readProposal} = require("../controllers/proposal");

router.get('/proposal', readProposal);

module.exports = router;