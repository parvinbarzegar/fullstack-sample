import React , {useState} from "react";
import Header from "../../components/nav/Header";
import CompanySideBar from "../../components/CompanySideBar";
import { Card } from 'antd';

const Dashboard = () => {
  const [loading , setLoading] = useState(false);

  return (
   <div>
      <Header/>
      <div className="container-fluid">
        <div className ="row">
            <div className="col-md-2">
              <CompanySideBar itemKey = "1"/>
            </div>
            <div className="col-md-10">
                <br/>
                {loading? <h4 className="text-danger">Loading...</h4>: <h4 >Dashboard</h4>}
                <br/>
                <div className = "row">
                    <div className = "col-md-4 text-center">
                          <Card >
                            <h6>Job Request</h6>
                            <hr className = "dashboard-line-job"/>
                            <div>
                                <span className = "float-left">Recieved</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Accepted</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Rejected</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">UnAnswerd</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            
                          </Card>
                    </div>

                    <div className = "col-md-4 text-center">
                          <Card >
                            <h6>Company Proposals</h6>
                            <hr className = "dashboard-line-proposal"/>
                            <div>
                                <span className = "float-left">Recieved</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Accepted</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Rejected</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">UnAnswerd</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            
                          </Card>
                    </div>

                    <div className = "col-md-4 text-center">
                         <Card >
                            <h6>Total Reviews</h6>
                            <hr className = "dashboard-line-review"/>
                            <div>
                                <span className = "float-left">Recieved</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Accepted</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">Commented</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            <div>
                                <span className = "float-left">UnAnswerd</span>
                                <span className = "float-right"> 65</span>
                            </div>
                            
                          </Card>
                    </div>
                </div>
            </div>
        </div>    
    </div>
   </div>
  );
}

export default Dashboard;