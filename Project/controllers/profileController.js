const profile = require("../models/ProfileModel");

const getProfile = async(req,res)=>
{
    const data = await profile.find({});
    return res.status(200).json({
        message : "All profiles",
        data
    })
}

const createProfile = async(req,res)=>
{
    const {imageUrl , summary , skills, workExperience , linkedInUrl , githubUrl , codingPlatforms , resumeUrl} = req.body;
    const dataofUser = req.user;
    const {_id} = dataofUser;
    const checkUserId = await profile.findOne({userId : _id});
    if(checkUserId)
    {
        return res.status(400).json({message : "profile already exists"})
    }
    if(!imageUrl || !summary || !skills || !workExperience || !linkedInUrl || !githubUrl || !codingPlatforms || !resumeUrl)
    {
        return res.status(400).json({message : "please add all mandatory fields"});
    }
    const newProfile = await profile.create({
        userId: _id,
        imageUrl,
        summary,
        skills,
        workExperience,
        linkedInUrl,
        githubUrl,
        codingPlatforms,
        resumeUrl
    })
    const data = await newProfile.save();
    return res.status(200).json({message : "profile created", data})
}

const updateProfile = async(req,res) =>
{
    const {imageUrl , summary , skills , workExperience , linkedInUrl , githubUrl , codingPlatforms , resumeUrl} = req.body;
    if(!req.user)
    {
        return res.status(401).json({message : "user not authenticated"});
    }
    const userObject = Array.isArray(req.user) ? req.user[0] : req.user;
    if(!userObject)
    {
        return res.status(401).json({message : "user not authenticated"});
    }
    const {_id} = userObject;
    const checkUserId = await profile.findOne({userId : _id});
    if(!checkUserId)
    {
        return res.status(400).json({message : "profile does not exist"});
    }
    if(!imageUrl || !summary || !skills || !workExperience || !linkedInUrl || !githubUrl || !codingPlatforms || !resumeUrl)
    {
        return res.status(400).json({message : "please enter all mandatory fields"});
    }
    const updatedProfile = await profile.findOneAndUpdate(
        {userId : _id},
        {
            imageUrl,
            summary,
            skills,
            workExperience,
            linkedInUrl,
            githubUrl,
            codingPlatforms,
            resumeUrl
        },
        {new : true}
    );
    return res.status(200).json({
        message : "profile updated",
        data : updatedProfile
    })
}

module.exports = { getProfile , createProfile , updateProfile }