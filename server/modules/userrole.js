const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const userRoleSchema = new mongoose.Schema(
    {
        role : {
            type: String,
            required: true,
            index: true,
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('UserRole', userRoleSchema);