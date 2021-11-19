const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const boatTypeSchema = new mongoose.Schema(
    {
        name : String,
        img : String,
    },
    {timestamps: true}
);

module.exports =  mongoose.model('BoatType', boatTypeSchema);