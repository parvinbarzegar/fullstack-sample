import React ,{useState}from "react";
import {Select } from "antd";

const {Option} = Select;

const initialize = {
    boat_type: "",
    service_type : "",
    location : "",
    createdate : "",
    jobtype :false
}
const JobSearchForm = ({search}) => {
    const [searchParameter , setSearchParameter] = useState(initialize)


    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchParameter);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className = "row">
            <Select
                style={{ width: "15%" }}
                placeholder = "Service Type"
                optionFilterProp="children"
                allowClear
                value = {searchParameter.boat_type}
                onChange={(value) => ( setSearchParameter({...searchParameter, boat_type : value}))}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="">All Boat type</Option>
                <Option value="Motor Boats">Motor Boats</Option>
                <Option value="Sail Boats">Sail Boats</Option>
                <Option value="Spped Boats">Spped Boats</Option>
              </Select>
              <Select
                style={{ width: "15%" }}
                placeholder = "Boat Type"
                optionFilterProp="children"
                allowClear
                value = {searchParameter.service_type}
                onChange={(value) => ( setSearchParameter({...searchParameter, service_type : value}))}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="">All Service type</Option>
                <Option value="Engine Repair">Engine Repair</Option>
                <Option value="Sail Repair">Sail Repair</Option>
                <Option value="Painting">Painting</Option>
              </Select>
              <Select
                style={{ width: "15%" }}
                placeholder = "Location"
                optionFilterProp="children"
                allowClear
                value = {searchParameter.location}
                onChange={(value) => ( setSearchParameter({...searchParameter, location : value}))}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="">All Areas</Option>
                <Option value="Copenhagen">Copenhagen</Option>
                <Option value="Lyngby">Lyngby</Option>
                <Option value="Valby">Valby</Option>
              </Select>
              <Select
                style={{ width: "15%" }}
                placeholder = "Job Type"
                optionFilterProp="children"
                allowClear
                value = {searchParameter.jobtype}
                onChange={(value) => ( setSearchParameter({...searchParameter, jobtype : value}))}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="">All type</Option>
                <Option value={false}>Normal</Option>
                <Option value={true}>Emergency</Option>
              </Select>
              <input type="submit" value = "Apply" className = "btn btn-outline-warning" style={{ width: "15%", paddingleft:"100px" }}/>
            </div>
        </form>
    )
};

export default JobSearchForm;