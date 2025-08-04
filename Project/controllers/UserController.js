// const user = require('../models/userModel')
// const registerUser = async (req,res) =>
// {
//     const {firstname , lastname ,emailId,password} = req.body;
//     //validation
//     if(!firstname || !emailId || !password)
//     {
//         res.status(400).send({message : "Please add all mandatory fields"});
//     }
//     const userExists =  await User.finndOne({emailId});
//     if(userExists)
//     {
//         return res.status(400).json("user already exists");
//     }
//     const newuser = await User.create({
//         firstname,lastname,emailId,password
//     });

//     await newuser.save();
//     res.status(201).json("user added")


// }

// // const loginUser = () =>
// // {

// // }

// module.export = { registerUser }


const User = require('../models/userModel'); // Make sure you have this if you're using User model

const registerUser = async (req, res) => {
    const { firstname, lastname, emailId, password } = req.body;

    if (!firstname || !emailId || !password) {
        return res.status(400).send({ message: "Please add all mandatory fields" });
    }

    const userExists = await User.findOne({ emailId }); // also typo here: "finndOne" ➜ "findOne"
    if (userExists) {
        return res.status(400).json("User already exists");
    }

    const newUser = await User.create({
        firstname,
        lastname,
        emailId,
        password
    });

    res.status(201).json("User added");
};

module.exports = { registerUser }; // ✅ Corrected
