import React , {useEffect, useState} from "react";
import Header from "../../components/nav/Header";
import CompanySideBar from "../../components/CompanySideBar";
import {useParams} from "react-router-dom";
import { getJobInvite } from "../../functions/jobinvite";
import JobDescriptionTable from "../../components/table/JobDescriptionTable";
import JobCarosel from "../../components/carosel/JobCarosel";
import ReportUser from "../../components/modal/ReportUser";
import {createReportUser} from "../../functions/reportuser";
import { toast } from "react-toastify";

const Job = ({match}) => {
  const [loading , setLoading] = useState(false);
  const [jobInvite , setJobInvite] = useState({});
 

  const  params = useParams();
  const {id} = params;

  useEffect(() => {
    getJobInvite(id).then(res => setJobInvite(res.data));
    console.log("database",jobInvite);
  },[])

  const saveReportUser = (report) => {
   try {
     createReportUser(report)
     .then(res => {
       console.log(res.data);
       toast.success(res.data.data);
     }).catch(err => console.log(err))
     
   } catch (error) {
     console.log(error)
   }
  }
  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className ="row">
            <div className="col-md-2">
            <CompanySideBar itemKey = ""/>
            </div>
            <div className="col-md-10">
                <br/>
                {loading? <h4 className="text-danger">Loading...</h4>: <h4>Job Description</h4>}
                <br/>
                <div className = "row p-3 ">
                    <div className = "col-md-6 ">
                        <JobDescriptionTable jobInvite = {jobInvite} />
                        <div className = "col-md-12 text-center ">
                        <ReportUser jobInvite = {jobInvite } saveReportUser = {saveReportUser}/>
                          <br/>
                        </div>
                        
                    </div>
                    <div className = "col-md-6">
                        <JobCarosel/>
                        <div className = "row">
                        <div className = "col-md-6 text-center ">
                        <input type="button" value = "Make a Proposal" className = "btn btn-success text-light" style={{ width: "60%"}}/>
                          <br/>
                        </div>
                        <div className = "col-md-6 text-center ">
                          <input type="button" value = "Reject" className = "btn btn-danger text-light" style={{ width: "50%"}}/>
                          <br/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
   </div>
  );
}

export default Job;