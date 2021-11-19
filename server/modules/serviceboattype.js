const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const serviceBoatypeSchema = new mongoose.Schema(
    {
        service : {
            type : ObjectId,
            ref : "Service"
        },
        boat_type : {
            type : ObjectId,
            ref : "BoatType"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('ServiceBoatType', serviceBoatypeSchema);