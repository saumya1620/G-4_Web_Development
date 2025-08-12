const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
    userId : {type : Schema.Types.ObjectId , required : true},
    imageUrl :{
        type : String , 
        required : true
    },
    summary : {
        type : String , 
        required : true
    },
    skills : 
    {
        type : String , 
        required : true
    },
    workExperience : {
        type : String , 
        required : true
    },
    linkedInUrl : {
        type : String , 
        required : true
    },
    githubUrl :{
        type : String , 
        required : true
    },
    codingPlatorms :{
        type : String , 
        required : true
    },
    resumeUrl : {
        type : String , 
        required : true
    }
},{timestamps : true});
module.exports = mongoose.model("profile",ProfileSchema);