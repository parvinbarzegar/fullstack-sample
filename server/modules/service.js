const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const serviceSchema = new mongoose.Schema(
    {
        name : String,
        img : String,
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Service', serviceSchema);