import React, { useEffect, useState } from "react";
import {Modal , Button} from "antd";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {useNavigate , useParams} from "react-router-dom";

const ReportUser = ({jobInvite , saveReportUser}) => {
    const {user} = useSelector((state) => ({...state}));
    const [modalVisible, setModalVisible] = useState(false);
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [boatType, setBoatType] = useState("");
    const [dateCreated, setDateCreated] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [reportScript, setReportScript] = useState("");

    let navigate = useNavigate();
    let {id} = useParams();

    useEffect(() => {
        console.log(jobInvite);
        if(jobInvite.job){
            setUserName(jobInvite.job.user.username);
            setName(jobInvite.job.user.name);
            setServiceType(jobInvite.job.service.name);
           // setBoatType(jobInvite.job.boatSubType.boat_type.name);
            setDateCreated(jobInvite.job.createdAt);
            setContactInfo(jobInvite.job.user.email);
        }
    },[jobInvite]) ;


    const handleModal = () => {

        if(user ){
            setModalVisible(true)
        }else{
            navigate({
                pathname : '/welcome',
                state: {from : `/job/${id}`}
            })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = {
            reported_user : jobInvite.job.user._id,
            reporter_user: user._id,
            reason : reportScript,
            job: jobInvite.job._id
        }
       saveReportUser(report);
        setModalVisible(false)
    }
    return(
        <>
            <div onClick = {handleModal}>
                <input type="button" value = "Report User" className = "btn btn-warning text-light" style={{ width: "30%"}}/>
                </div>
             <Modal
                 
                 centered
                 visible = {modalVisible}
                 okButtonProps = {{ style: { display: 'none' } }}
                 cancelButtonProps={{ style: { display: 'none' } }}
                 onCancel = {() => {
                        setModalVisible(false);
                    }}
              >
                  <div >
                        <div className = "text-center">
                            <h7>{userName}</h7>
                        </div>
                        <table class="table">
                                <tbody>
                                    <tr>
                                        <th >User Name</th>
                                        <td scope="row">{name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Service Type</th>
                                        <td>{serviceType}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Boat Type</th>
                                        <td>{boatType}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date Created</th>
                                        <td>{dateCreated}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Contact Info</th>
                                        <td>{contactInfo}</td>
                                    </tr>
                                </tbody>
                            </table> 
                    </div>
                   <div className = "text-center">
                        <form onSubmit = {handleSubmit}>
                            <textarea
                               value = {reportScript} 
                               className = "form-control"
                               placeholder = "Describe the issue "
                               onChange = {(e)=>setReportScript(e.target.value)}
                            />
                            <br/>
                            <input 
                                type = "submit"
                                className = "btn btn-warning text-light"
                                value = "Report"
                            />
                        </form>
                   </div>
             </Modal>
        </>
    )
};


export default ReportUser;