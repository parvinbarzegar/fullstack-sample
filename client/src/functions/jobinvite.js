import axios from "axios";


export const getAllJobInvites = async (arg) => {
    console.log(arg);
    return  await axios.post(`${process.env.REACT_APP_API}/all-jobinvites`, arg, {});
} 

export const getSearchJobInvites = async (arg) => {
    return  await axios.post(`${process.env.REACT_APP_API}/search-jobinvites`, arg,{});
} 

export const getJobInvite = async (id) => {
    return  await axios.get(`${process.env.REACT_APP_API}/job-invite/${id}`);
} 