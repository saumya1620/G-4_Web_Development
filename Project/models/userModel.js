const mongoose = require('mongoose');

const {Schema} = mongoose;
const UserSchema = new Schema({
    firstname : {type:String , required:true},
    lastname : {type:String},
    emailId : {type:String , unique:true, required:true},
    password : {type:String ,required:true}
    
})

module.exports = mongoose.model("User",UserSchema);