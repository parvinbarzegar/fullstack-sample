import axios from "axios";

export const login = async(arg) => {
    return await axios.post(`${process.env.REACT_APP_API}/login`,arg,{});
}


export const logoutUser = async() => {
    return await axios.get(`${process.env.REACT_APP_API}/logout`);
}