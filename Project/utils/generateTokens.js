const jwt = require("jsonwebtoken");


const generatetoken = (user) =>
{
    return jwt.sign({userId : user._id},process.env.SECRET, { expiresIn : "1d"});
}

module.exports = generatetoken;