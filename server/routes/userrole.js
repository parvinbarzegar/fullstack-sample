const express = require("express");

const router = express.Router();

//import functions
const {create} = require("../controllers/userrole");

router.post('/user_role_create', create);

module.exports = router;