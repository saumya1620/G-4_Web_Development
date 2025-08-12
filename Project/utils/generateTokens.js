const jwt = require("jsonwebtoken");


const generatetoken = (user) =>
{
    return jwt.sign({user},process.env.SECRET);
}

module.exports = generatetoken;