const express = require("express");

const router = express.Router();

//import functions
const {
    login,
    logout,
    register
} = require("../controllers/user");

router.post('/login', login);
router.get('/logout', logout);
router.post('/register', register);

module.exports = router;