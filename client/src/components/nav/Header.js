import React, { useState } from "react";
import { Menu , Badge } from 'antd';
import {  
  RedEnvelopeOutlined,
  BellOutlined,
  UserOutlined ,
  LogoutOutlined ,
  ProfileOutlined  
} from '@ant-design/icons';
import {logoutUser} from "../../functions/auth";
import {Link , useNavigate} from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

const { SubMenu, Item } = Menu; 



const Header = () => {
    const [current, setCurrent]=useState('home');

    let dispatch = useDispatch();
    let {user} = useSelector((state)=>({...state}));

    let navigate = useNavigate(); 

    const  handleClick = (event)=>{
        setCurrent(event.key)
    }

    const logout = () =>{
        logoutUser()
       .then(res => {
        dispatch({
            type: "LOGOUT",
            payload : null
          });
          localStorage.removeItem("token");
          navigate("/welcome");
       })
       
    }
    return(
       
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" className="p-1">
           
       
            <Item key="njord"  className="customclass " >
                 <i className = "text-light p-3 h5">NJORD</i>
            </Item>
         
            <Item key="notificatioin" icon={<BellOutlined/>} style={{ marginleft: 'auto' }} >
                
                    <Badge count = {2} offset = {[9,-15]} />
                
            </Item>
            <Item key="message" icon={<RedEnvelopeOutlined />} style={{ marginleft: 'auto' }} >
                
                    <Badge count = {2} offset = {[9,-15]} />
                
            </Item>
            {user && <SubMenu key="SubMenu"
                        className="float-end customclass p-1"
                        icon={<UserOutlined/>}
                        title={user.username}
                        style={{ marginLeft: 'auto' }}
                     >
                        {user && (
                        <Item className="customclass" icon = {<ProfileOutlined/>}>
                            <Link to = "/profile">Profile</Link>
                        </Item>
                        )}
                        <Item icon={<LogoutOutlined />} onClick={logout} className="customclass">Logout</Item>
            </SubMenu>}
     
           
        </Menu>
        
    );
};


export default Header;