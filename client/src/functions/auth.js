import axios from "axios";

export const login = async(arg) => {
    return await axios.post(`${process.env.REACT_APP_API}/login`,arg,{});
}


export const logoutUser = async() => {
    return await axios.get(`${process.env.REACT_APP_API}/logout`);
}

export const currentUser = async(token) => {
    return await axios.post(`${process.env.REACT_APP_API}/current-user`,{},{
        headers : {
            token
        }
    });
}