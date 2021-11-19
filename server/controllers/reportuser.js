const  ReportUser = require("../modules/repotruser");


exports.createReport = async (req,res) => {
    const {reason , reported_user, reporter_user,job} = req.body;
   
    const report = await new ReportUser({reason,reported_user,reporter_user,job}).save();
  
    
    res.json({data : "Report created."});
};