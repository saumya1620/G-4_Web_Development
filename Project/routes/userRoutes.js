// const express = require('express');
// const {registerUser} = require('../controllers/UserController')
// const router = express.Router();

// router.post("/register", registerUser);
// app.use(function(req,res,next)
// {
//     console.log("this is global");
//     next();
// })


// module.exports = router ;

const express = require('express');
const { registerUser } = require('../controllers/UserController'); // make sure this is a function

const router = express.Router();

// POST /api/user/register
router.post("/register", registerUser);

module.exports = router;
