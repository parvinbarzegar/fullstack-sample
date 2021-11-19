const mongoose = require("mongoose");
const job = require("./job");
const {ObjectId} = mongoose.Schema;


const jobInviteSchema = new mongoose.Schema(
    {
        job : {
            type : ObjectId,
            ref : "Job"
        },
        company : {
            type : ObjectId,
            ref : "Company"
        },
        status : {
            type: String,
            enum : ["pending,regected"],
            default : "pending"
        }

    },
    {timestamps: true}
);

module.exports =  mongoose.model('JobInvite', jobInviteSchema);