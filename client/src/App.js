import React , {useEffect} from "react";
import {Routes,Route , useNavigate} from "react-router-dom";
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import { currentUser } from "./functions/auth";


import Login from "./pages/Loging";
import Dashboard from "./pages/company/Dashboard";
import JobAds from "./pages/company/JobAds";
import Proposal from "./pages/company/Proposal";
import Review from "./pages/company/Review";
import Profile from "./pages/company/Profile";
import Job from "./pages/company/Job";

const App = () => {

  const  dispatch = useDispatch();
  const navigate = useNavigate();
// to catch firebase auth state  
useEffect(()=>{
  
    if(localStorage.getItem('token')){
      const token = JSON.parse(localStorage.getItem('token'));
      currentUser(token)
      .then( (res)=> { dispatch({
                         type: "LOGGED_IN_USER",
                         payload: {
                             username: res.data.username,
                             email: res.data.email,
                             token: token,
                             role: res.data.role,
                             _id: res.data._id
                        }
                     });
                   }
      ).catch(err=>{
        console.log(err);
        toast.error(err.err)
        navigate('/welcome');
      });
    }
 
},[dispatch]);
  return (
   <>
     <ToastContainer/>
     <Routes>
     <Route exact path = "/" element = {<Login/>}/>
     <Route exact path = "/welcome" element = {<Login/>}/>
     <Route exact path = "/dashboard" element = {<Dashboard/>}/>
     <Route exact path = "/jobads" element = {<JobAds/>}/>
     <Route exact path = "/proposal" element = {<Proposal/>}/>
     <Route exact path = "/review" element = {<Review/>}/>
     <Route exact path = "/profile" element = {<Profile/>}/>
     <Route exact path = "/job/:id" element = {<Job/>}/>


   </Routes>
   </>
  );
};

export default App;
