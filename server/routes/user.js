const express = require("express");

const router = express.Router();

//import functions
const {
    login,
    logout,
    register,
    currentUser
} = require("../controllers/user");

//import middlewares
const {authCheck} = require('../controllers/middlewares');

router.post('/login', login);
router.get('/logout', logout);
router.post('/current-user', authCheck,currentUser);
router.post('/register', register);

module.exports = router;