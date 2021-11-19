import axios from "axios";


export const getAllJobs = async () => {
    return  await axios.get(`${process.env.REACT_APP_API}/all-jobs`);
} 

export const getJob = async (id) => {
    return  await axios.get(`${process.env.REACT_APP_API}/read-job/${id}`);
} 