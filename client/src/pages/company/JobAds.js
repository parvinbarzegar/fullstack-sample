import React , {useEffect, useState} from "react";
import Header from "../../components/nav/Header";
import CompanySideBar from "../../components/CompanySideBar";
import { Select } from 'antd';
import { useDispatch , useSelector } from "react-redux";
import { getAllJobInvites, getSearchJobInvites } from "../../functions/jobinvite";
import JobTab  from "../../components/tabs/JobTab";
import JobSearchForm from "../../components/form/JobSearchForm";

const { Option } = Select;

const JobAds = () => {
  const [loading , setLoading] = useState(false);
  const [jobInvites , setJobInvites] = useState([]);

  const {user} = useSelector((state)=>({...state}));

  useEffect(() => {
      loadAllJobInvites();
  },[]);

  const loadAllJobInvites = () =>{
    try {
    
      if(user){
            getAllJobInvites({username:user.username}).then(res => {
                 setLoading(true)
                 setJobInvites(res.data);
                 setLoading(false);
              }).catch(err =>{
                setLoading(false);
                setJobInvites([]);
                console.log(err);
        });
      }  
    } catch (error) {
      console.log(error);
    }
  };

  const search = (searchParameter) => {
    console.log(searchParameter);
    try {
    
      if(user){
            getSearchJobInvites(searchParameter).then(res => {
                 setLoading(true)
                 setJobInvites(res.data);
                 setLoading(false);
              }).catch(err =>{
                setLoading(false);
                setJobInvites([]);
                console.log(err);
        });
      }  
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className ="row">
            <div className="col-md-2">
            <CompanySideBar itemKey = "2"/>
            </div>
            <div className="col-md-10">
                <br/>
                {loading? <h4 className="text-danger">Loading...</h4>: <h4>Job Ads</h4>}
                <br/>
                <div className = "row p-3">
                  <JobSearchForm search = {search}/>
                </div>
                <div className = "row p-3 ">
                  <JobTab  jobInvites= {jobInvites}/>
                </div>
            </div>
        </div>    
    </div>
   </div>
  );
}

export default JobAds;