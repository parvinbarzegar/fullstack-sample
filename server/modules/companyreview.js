const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const companyReviewSchema = new mongoose.Schema(
    {
        raiting : Number,
        description : String,
        company : {
            type : ObjectId,
            ref : "Company"
        },
        user : {
            type : ObjectId,
            ref : "User"
        }
    },
    {timestamps: true}
);

module.exports =  mongoose.model('CompanyReview', companyReviewSchema);