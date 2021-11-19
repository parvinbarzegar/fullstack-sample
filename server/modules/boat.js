const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const boatSchema = new mongoose.Schema(
    {
        name :{
            type : String,
            index : true,
            required : true
        },
        year : Number,
        boatSubType : {
            type : ObjectId,
            ref : "BoatSubType"
        },
        engine : {
            type : ObjectId,
            ref : "Engine"
        },
        user : {
            type : ObjectId,
            ref : "User"
        },
        engine_serial_number : String,
        description : String,
        length : Number,
        addess : String,
        zip_code : String,
        city : String
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Boat', boatSchema);