const express = require("express");

const router = express.Router();

//import functions
const {login} = require("../controllers/auth");

router.get('/auth', login);

module.exports = router;