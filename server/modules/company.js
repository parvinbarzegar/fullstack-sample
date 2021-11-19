const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const companySchema = new mongoose.Schema(
    {
        name :{
            type : String,
            index : true,
            required : true
        },
        lat : Number,
        lng : Number,
        user : {
            type : ObjectId,
            ref : "User"
        },
        logo_img_url : String,
        cvr : {
            type : String,
            length: 10
        },
        is_paid : Boolean,
        is_enabled : Boolean,
        is_visible : Boolean
    },
    {timestamps: true}
);

module.exports =  mongoose.model('Company', companySchema);