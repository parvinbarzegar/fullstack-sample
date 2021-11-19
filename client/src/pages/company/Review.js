import React , {useState} from "react";
import Header from "../../components/nav/Header";
import CompanySideBar from "../../components/CompanySideBar";

const Review = () => {
  const [loading , setLoading] = useState(false);

  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className ="row">
            <div className="col-md-2">
            <CompanySideBar itemKey = "4"/>
            </div>
            <div className="col">
                {loading? <h4 className="text-danger">Loading...</h4>: <h4>Review</h4>}
            </div>
        </div>    
    </div>
   </div>
  );
}

export default Review;