const express = require("express");
const {getProfile , createProfile , updateProfile} = require("../controllers/profileController");
const authmiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/",getProfile);
router.post("/",authmiddleware,createProfile);
router.post("/update",authmiddleware,updateProfile);

module.exports = router;