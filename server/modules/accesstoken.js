const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const accessTokenSchema = new mongoose.Schema(
    {
        ttl : Number,
        user : {
            type : ObjectId,
            ref : "User"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('AccessToken', accessTokenSchema);