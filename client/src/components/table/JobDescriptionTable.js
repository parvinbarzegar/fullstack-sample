import React, { useEffect, useState }  from "react";

const intitialize = {
    boat: {
        name : "",
        boatSubType : {
            boat_type:{
                name: ""
            },
        },
    },
    user : {
        phone_number : "",
        address : "",
    },
    due_date : "",
    due_time : "",
    description : "",

}

const JobDescriptionTable = ({jobInvite}) => {

    const [job , setJob] = useState(intitialize);

    useEffect(() => {
      if(jobInvite){
        setJob(jobInvite.job);
      }
      
    }, [jobInvite]);
 

  return (
    <div>
       <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Boat Name</th>
                    <td>{job && job.boat.name}</td>
                </tr>
                  <tr>
                    <th scope="row">Boate Type</th>
                    <td>{job && job.boat.boatSubType.boat_type.name}</td>
                </tr>
                <tr>
                    <th scope="row">Boat Location</th>
                    <td>{job && job.user.address}</td>
                </tr>
                <tr>
                    <th scope="row">Due Date</th>
                    <td>{job && job.due_date}</td>
                </tr>
                <tr>
                    <th scope="row">Due Time</th>
                    <td>{job && job.due_time}</td>
                </tr>
                <tr>
                    <th scope="row">Job Type</th>
                    <td>Type1</td>
                </tr>
                <tr>
                    <th scope="row">Job Category</th>
                    <td>Category 1</td>
                </tr>
                <tr>
                    <th scope="row">Job SubCategory</th>
                    <td>SubCategory 1</td>
                </tr>
                <tr>
                    <th scope="row">Job Description</th>
                    <td>{job && job.description}</td>
                </tr>
                <tr>
                    <th scope="row">Prefered contact</th>
                    <td>Tell:{job && job.user.phone_number}</td>
                </tr>
              
            </tbody>
        </table> 
   </div>
  );
}

export default JobDescriptionTable;