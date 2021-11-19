import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,     
    SolutionOutlined,
    StarOutlined,
    ToolOutlined 
  } from '@ant-design/icons';
  import { useSelector} from "react-redux";  

  const { SubMenu } = Menu;

const CompanySideBar = ({itemKey}) => {
    const [collapsed , setCollapsed] = useState(false);

    const {user} = useSelector (state => ({...state}));
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
    <>
    
    <div  className = "flex-column">
        <Button type="success" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          selectedKeys = {[itemKey]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
         >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to = "/dashboard" className = "customclass ">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon = {<ToolOutlined />}>
                    <Link to = "/jobads" className = "customclass ">Job Ads</Link>
                </Menu.Item>
                <Menu.Item key="3" icon = {<SolutionOutlined />} >
                    <Link to = "/proposal" className = "">Proposal</Link>
                </Menu.Item>
                <Menu.Item key="4" icon = {<StarOutlined />} >
                    <Link to = "/review" className = "">Review</Link>
                </Menu.Item>
        </Menu>
      </div>
    </>
    );
};

export default CompanySideBar;