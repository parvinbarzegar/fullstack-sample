const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const boatSubTypeSchema = new mongoose.Schema(
    {
        name : String,
        img : String,
        boat_type : {
            type : ObjectId,
            ref : "BoatType"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('BoatSubType', boatSubTypeSchema);