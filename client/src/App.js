import React from "react";
import {Routes,Route , } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from "./pages/Loging";
import Dashboard from "./pages/company/Dashboard";
import JobAds from "./pages/company/JobAds";
import Proposal from "./pages/company/Proposal";
import Review from "./pages/company/Review";
import Profile from "./pages/company/Profile";
import Job from "./pages/company/Job";

const App = () => {
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
