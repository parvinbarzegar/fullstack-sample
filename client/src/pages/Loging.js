import React, {useState , useEffect} from "react";
import {login} from "../functions/auth";
import {toast} from "react-toastify";
import {useDispatch , useSelector} from "react-redux"  ;
import {Link , useNavigate} from 'react-router-dom';


const Login = () => {

  const [userName,setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
     setLoading(true);
     try{
        login({username:userName,password})
        .then( (res)=> { 
        //  console.log(res.data);
                      if(res.data){
                        localStorage.setItem('token', JSON.stringify(res.data.token));
                        dispatch({
                          type: "LOGGED_IN_USER",
                          payload: {
                              name: res.data.user.name,
                              email: res.data.user.email,
                              role: res.data.user.user_role,
                              _id: res.data.user._id,
                              username : res.data.user.username,
                              token: res.data.token
                         }
                      });
                      setLoading(false);
                      navigate("/dashboard");
                      }else{
                        setLoading(false);
                        toast.error("Unvalid User!");
                      }
                     }
        ).catch(err=>console.log(err));
    }catch(console){
         toast.error(console.message)
         setLoading(false);
    }
    
 };

  const loginForm=()=> <form onSubmit={handleSubmit} className = "card text-center" >
            <div className = " login-nav-bg-color pb-3 pt-3 text-light text-center">
              <h4 className = "text-center text-light "><i>NJORD</i></h4>
            </div>
            <div className = "pt-3 text-secondary">
            <h2> Company Login</h2>
            </div>
            <div className="form-group p-3">
            <input 
                type="text" 
                className="form-control "
                value={userName}
                onChange={event=>setUserName(event.target.value)}
                placeholder="Username"
                autoFocus   
                />
            </div>
                
            <div className="form-group p-3">
            <input 
                type="password" 
                className="form-control"
                value={password}
                onChange={event=>setPassword(event.target.value)}
                placeholder="Password"
                  
                />
            </div>
            <div className="row p-3 ">
                <div className = "col-md-6">
                <input className="form-check-input " type="checkbox" value="" id="remember-me"/>
                  <label className="form-check-label" htmlFor="remember-me">
                    Remmember me
                  </label>
                </div>
                <div className = "col-md-6">
                <Link 
                    to="/dashboard" 
                    className="" 
                    style={{ textDecoration: 'none', color : 'black', marginRight:'0' }}
                    >Forgot Password?</Link>
                  </div>
                  
                  
              </div>
                <br/>
                <div className="form-group p-3">
              <input
                onClick={handleSubmit}
                type="submit"
                className="btn btn-warning text-light form-control "
                disabled={!userName||password.length<8}
                value = "Sign In"
              />
              </div>
              <Link to="/" className="float-right text-secondary" >Terms & Conditions</Link>
              <br/>
                
    </form>

  return (
    <div className="container-fluid  p-5 bgpic">

          <div className="row ">
          <div className="col-md-1 offset-md-1"></div>
            <div className="col-md-4 offset-md-2">
                {loading?"loading":loginForm()}
            </div>
          </div>
        </div>
  );
}

export default Login;