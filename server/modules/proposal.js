const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const proposalSchema = new mongoose.Schema(
    {
        date : Date,
        time : TimeRanges,
        descriptiion : Text,
        negotiable : Boolean,
        status : {
            type : String,
            enum : ["pending", "accepted", "rejected" , "canceled"]
        },
        company : {
            type : ObjectId,
            ref : "Company"
        },
        job : {
            type : ObjectId,
            ref : "Job"
        },
        
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Proposal', proposalSchema);