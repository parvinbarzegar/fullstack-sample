import React, { useEffect, useState } from "react";
import { Tabs } from 'antd';
import JobTable from "./JobTable";


const { TabPane } = Tabs;

const JobTab = ({jobInvites}) => {
    
    const [pendingJobs, setpendingJobs] = useState([]);
    const [rejectedJobs , setRejectedJobs] = useState([]);

    useEffect(() =>{
        laadPendingJobs(jobInvites);
    },[jobInvites])

    const laadPendingJobs = (invites) => {
        
        const pendingInvites = invites.filter((invite) => invite.status === "pending");
        const result = pendingInvites.map(({
            job,
            _id
        }) =>{
                return {
                    key : _id,
                    name: job.user ? job.user.username : "",
                    boatType : job.boat ? job.boat.boatSubType.boat_type.name : "",
                    service : job.service ? job.service.name : "",
                    boatlocation : job.user ? job.user.address : "",
                    datecreated : job.createdAt,
                    duedate : job.due_date ? job.due_date : "",
                    jobtype :  job.is_emergency === true ? 'emergency' : 'normal',
                   
                };             
        });
       
        setpendingJobs(result); 
    }

    const laadRejectedJobs = (key) => {
        if(key === "2"){
            const rejectedInvites = jobInvites.filter((invite) => invite.status === "rejected");
            const result = rejectedInvites.map(({
                job,
                _id
            }) =>{
                    return {
                        key : _id,
                        name: job.user ? job.user.username : "",
                        boatType : job.boat ? job.boat.boatSubType.boat_type.name : "",
                        service : job.service ? job.service.name : "",
                        boatlocation : job.user ? job.user.address : "",
                        datecreated : job.createdAt,
                        duedate : job.due_date ? job.due_date : "",
                        jobtype :  job.is_emergency === true ? 'emergency' : 'normal',
                    
                    };             
            });
            
            setRejectedJobs(result); 
        }
    }

    return(
        <Tabs defaultActiveKey="1" centered onTabClick = {laadRejectedJobs} type = "card">
        <TabPane tab="Pending" key="1" >
            <JobTable data = {pendingJobs}/>
        </TabPane>
        <TabPane tab="Rejected" key="2"  >
             <JobTable data = {rejectedJobs}/>
        </TabPane>
      </Tabs>
    );
};

export default JobTab;