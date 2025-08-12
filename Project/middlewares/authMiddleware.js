const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const authmiddleware = async(req,res,next) =>
{
    const { authorization } = req.headers;
    if(!authorization)
    {
        return res.status(401).json({message : "authorization header missing"});
    }
    const token = authorization.split(" ")[1];
    if(!token)
    {
        return res.status(401).json({message : "token missing"});
    }
    const userData = jwt.verify(token , process.env.SECRET);
    if(!userData)
    {
        return res.status(401).json({message : "unauthorized user"});
    }
    const _id = userData.userId;
    req.userId = _id;
    const user =  await User.find({_id});
    console.log(user);
    if(user.length === 0) return res.status(401).json({message : "user not found"});

}
module.exports = authmiddleware;