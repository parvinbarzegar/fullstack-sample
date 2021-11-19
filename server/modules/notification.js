const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const notificationSchema = new mongoose.Schema(
    {
        message : String,
        is_read : Boolean,
        type : {
            type : String,
            enum : ["message", "proposal"]
        },
        user : {
            type : ObjectId,
            ref : "User"
        },
        proposal : {
            type : ObjectId,
            ref : "Proposal"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Notification', notificationSchema);