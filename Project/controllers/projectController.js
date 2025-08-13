const project = require("../models/ProjectModel");

const createProject = async(req,res)=>
{
    const{ imageUrl , projectOwner, projectTitle,description,techStack,experienceLevel,projectContributor } = req.body;
    const dataOfUser = req.user;
    const { _id } = dataOfUser;
    if (!imageUrl || !projectOwner || !projectTitle || !description || !techStack || !experienceLevel) {
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }
    const newProject = await project.create({
        userId: _id,
        imageUrl,
        projectOwner,
        projectTitle,
        description,
        techStack,
        experienceLevel,
        projectContributor
    });
    
    const data = newProject();
    return res.status(200).json({ message: "Project created", data });
};

const getProjects = async (req, res) => {
    const data = await project.find({});
    return res.status(200).json({
        message: "All projects",
        data
    });
};
const updateProject = async (req, res) => {
    const { imageUrl, projectOwner, projectTitle, description, techStack, experienceLevel, projectContributor, isActive } = req.body;

    if (!req.user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const userObject = Array.isArray(req.user) ? req.user[0] : req.user;
    if (!userObject) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { _id } = userObject;

    const existingProject = await project.findOne({ userId: _id });
    if (!existingProject) {
        return res.status(400).json({ message: "Project does not exist" });
    }

    const updatedProject = await Project.findOneAndUpdate(
        { userId: _id },
        { imageUrl, projectOwner, projectTitle, description, techStack, experienceLevel, projectContributor, isActive },
        { new: true }
    );

    return res.status(200).json({
        message: "Project updated",
        data: updatedProject
    });
};


module.exports = { getProjects, createProject, updateProject };

