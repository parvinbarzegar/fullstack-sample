const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const reportUserSchema = new mongoose.Schema(
    {
        reason :{
            type : String,
            index : true,
            required : true
        },
        reported_user : {
            type : ObjectId,
            ref : "User"
        },
        reporter_user : {
            type : ObjectId,
            ref : "User"
        },
        job : {
            type : ObjectId,
            ref : "Job"
        },
        
        
    },
    {timestamps: true}
);

module.exports =  mongoose.model('ReportUser', reportUserSchema);