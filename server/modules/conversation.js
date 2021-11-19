const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const conversationSchema = new mongoose.Schema(
    {
        active : Boolean,
        from_user : {
            type : ObjectId,
            ref : "User"
        },
        to_user : {
            type : ObjectId,
            ref : "User"
        },
        proposal : {
            type : ObjectId,
            ref : "Proposal"
        },
        
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Conversation', conversationSchema);