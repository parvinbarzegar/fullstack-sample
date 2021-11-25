const JobInvite = require("../modules/jobinvite");
const Job = require("../modules/job");
const User = require("../modules/user");
const Boat = require('../modules/boat');
const Boattype = require('../modules/boattype');
const service = require('../modules/service');
const boatSubType = require('../modules/boatsubtype');
const Company = require("../modules/company");


exports.allJobInvites = async (req,res) => {
    const {username} = req.body;
    console.log("username" , username);
    const jobinvites = await JobInvite.find({})
    .populate({path:'company', populate :{path: "user", match :username}})
    .populate({path : "job",populate:{path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type"},},},})
    .populate({path: "job",populate:{path: "service"}})
    .populate({path: "job",populate:{path: "user"}})
    .sort([["createdAt" , "desc"]])
    .exec();
    
    res.json(jobinvites);
};

exports.JobInvites = async (req,res) => {
    
    const jobinvites = await JobInvite.find({})
    .populate({path:'company', populate :{path: "user"}})
    .populate({path : "job",populate:{path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type"},},},})
    .populate({path: "job",populate:{path: "service"}})
    .populate({path: "job",populate:{path: "user"}})
    .sort([["createdAt" , "desc"]])
    .exec();
    
    res.json(jobinvites);
};

exports.jobInvite = async (req,res) => {
    //const {username} = req.body;
    const {id} = req.params;
    const jobinvite = await JobInvite.findById(id)
    .populate({path:'company', populate :{path: "user"}})
    .populate({path : "job",populate:{path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type"},},},})
    .populate({path: "job",populate:{path: "service"}})
    .populate({path: "job",populate:{path: "user"}})
    .sort([["createdAt" , "desc"]])
    .exec();
    
    res.json(jobinvite);
};

exports.searchJobInvites = async (req,res) => {
    let location = {};
    let servicetype = {}
    let boattype = { }
    let jobtype = {}
    let obj_entities = Object.entries(req.body)
    for (const [k, v] of obj_entities) {
        if(v!="" && k == 'boat_type'){
           boattype.name = v;
            continue;
        }
        if(v!="" && k == 'service_type'){
            servicetype.name = v;
            continue;
        }
        if(v!="" && k == 'location'){
            location.address = v;
            continue;
        }
        if( k == 'jobtype'){
            jobtype.is_emergency = v;
            // console.log("see here");
            continue;
        }
  
     }

     const jobinvite = await JobInvite.find({})
     .populate({path:'company', populate :{path: "user"}})
     .populate({path : "job",jobtype,populate:{path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type" , boattype},},},})
     .populate({path: "job",populate:{path: "service", servicetype}})
     .populate({path: "job",populate:{path: "user" , location}})
     .sort([["createdAt" , "desc"]])
     .exec();
     
    // const agg = await JobInvite.aggregate([
    //     {
    //         $lookup:
    //         {
    //             "from": "jobs",
    //             "localField": "job",
    //             "foreignField": "_id",
    //             "as": "_job"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "companies",
    //             "localField": "company",
    //             "foreignField": "_id",
    //             "as": "_company"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "boats",
    //             "localField": "_job.boat",
    //             "foreignField": "_id",
    //             "as": "_boat"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "boatsubtypes",
    //             "localField": "_boat.boatSubType",
    //             "foreignField": "_id",
    //             "as": "_boatsubtype"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "boattypes",
    //             "localField": "_boatsubtype.boat_type",
    //             "foreignField": "_id",
    //             "as": "_boattype"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "users",
    //             "localField": "_job.user",
    //             "foreignField": "_id",
    //             "as": "_user"
    //         }
    //     },
    //     {
    //         $lookup:
    //         {
    //             "from": "services",
    //             "localField": "_job.service",
    //             "foreignField": "_id",
    //             "as": "_serivce"
    //         }
    //     },
    //     {
    //         $match: {
    //               "_boattype.name": 'Motor Boats' 
                
    //         }
    //     }
    // ]).exec();
   
    console.log(agg);
    res.json(agg);
}