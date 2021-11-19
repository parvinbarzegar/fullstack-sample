import React from "react";
import { Table, Tag, Space } from 'antd';
import {  
    SearchOutlined
  } from '@ant-design/icons';
import {Link} from "react-router-dom";


const columns = [
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Boat Type',
      dataIndex: 'boatType',
      key: 'boatType',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
        title: 'Boat Location',
        dataIndex: 'boatlocation',
        key: 'boatlocation',
    },
    {
        title: 'Date Created',
        dataIndex: 'datecreated',
        key: 'datecreated',
    },
    {
        title: 'Due Date',
        dataIndex: 'duedate',
        key: 'duedate',
    },
    {
        title: 'Job Type',
        dataIndex: 'jobtype',
        key: 'jobtype',
      render: jobType => (
              <Tag color={jobType === "normal" ? 'green' : 'volcano'} key={jobType}>
                {jobType.toUpperCase()}
              </Tag>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to = {`/job/${record.key}`}><SearchOutlined /></Link>
        </Space>
      ),
    },
  ];

  

const JobTable = ({data}) => {
      return(
        <Table columns={columns} dataSource={data} />
    );
};

export default JobTable;