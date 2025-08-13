const express = require("express");
const { getProjects, createProject, updateProject } = require("../controllers/projectController");

const authmiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/",getProjects);
router.post("/",authmiddleware,createProject);
router.post("/update",authmiddleware,updateProject);

module.exports = router;