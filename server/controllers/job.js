const Job = require("../modules/job");
const User = require("../modules/user");
const Boat = require('../modules/boat');
const Boattype = require('../modules/boattype');
const service = require('../modules/service');
const boatSubType = require('../modules/boatsubtype');




exports.allJobs = async (req,res) => {
    const jobs = await Job.find({})
    .populate('user')
    .populate({path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type"},},})
    .populate('service')
    .sort([["createdAt" , "desc"]])
    .exec();
    
    res.json(jobs);
}

exports.readJob = async (req,res) => {
    const {id} = req.params;
    const job = await Job.findById(id)
    .populate('user')
    .populate({path:'boat', populate : {path: "boatSubType" , populate : {path : "boat_type"},},})
    .populate('service')
    .exec();
    
    res.json(job);
}