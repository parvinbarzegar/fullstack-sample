const express = require("express");

const router = express.Router();

//import functions
const {
    createReport
} = require("../controllers/reportuser");


router.post('/create-report', createReport);



module.exports = router;