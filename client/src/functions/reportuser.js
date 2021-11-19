import axios from "axios";


export const createReportUser = async (arg) => {
    
    return  await axios.post(`${process.env.REACT_APP_API}/create-report`, arg, {});
} 
