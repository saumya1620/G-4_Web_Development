const express = require('express');
const { registerUser , loginUser} = require('../controllers/UserController'); // make sure this is a function

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser)

module.exports = router;
