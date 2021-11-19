const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const messageSchema = new mongoose.Schema(
    {
        text : Text,
        is_read : Boolean,
        from_user : {
            type : ObjectId,
            ref : "User"
        },
        to_user : {
            type : ObjectId,
            ref : "User"
        },
        conversation : {
            type : ObjectId,
            ref : "Conversation"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Message', messageSchema);