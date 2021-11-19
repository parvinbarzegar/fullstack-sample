const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const companyServiceBoatTypeSchema = new mongoose.Schema(
    {
        service_boat_type : {
            type : ObjectId,
            ref : "ServiceBoatType"
        },
        company : {
            type : ObjectId,
            ref : "Company"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('CompanyServiceBoatType', companyServiceBoatTypeSchema);