const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const {ObjectId} = mongoose.Schema;


const userSchema = new mongoose.Schema(
    {
       active : Boolean,
       profile_pic : String,
       name : String,
       email : String,
       username : {
           type : String,
           required: true,
           index : true
       },
       user_role : { 
           type : ObjectId,
           ref: "UserRole"
         },
    //    password : {
    //        type : String,
    //        required : false,
    //        minlength : 8
    //    },
       phone_number : String,
       address : String,
       zip_code : String,
       city : String
    },
    {timestamps: true}
);

userSchema.plugin(passportLocalMongoose);

module.exports =  mongoose.model('User', userSchema);