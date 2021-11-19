const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;


const jobSchema = new mongoose.Schema(
    {
        title :{
            type : String,
            index : true,
            required : true
        },
        is_emergency : Boolean,
        allow_contact_by_app : Boolean,
        can_user_bring_boate : Boolean,
        allow_picking_from_spot : Boolean,
        allow_repair_on_spot : Boolean,
        allow_contact_by_phone : Boolean,
        allow_contact_by_email : Boolean,
        lat : Number,
        lng : Number,
        price : Number,
        posted : Boolean,
        due_date : Date,
        due_time : Date,
        is_done : Boolean,
        user : {
            type : ObjectId,
            ref : "User"
        },
        boat : {
            type : ObjectId,
            ref : "Boat"
        },
        service : {
            type : ObjectId,
            ref : "Service"
        },
        awarded_compony : {
            type : ObjectId,
            ref : "Company"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Job', jobSchema);