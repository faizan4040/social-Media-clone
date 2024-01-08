import { useState } from "react";
import './Auth.css'
import React from "react";
import Logo from "../../img/logo.png"
import {useDispatch} from 'react-redux'
import { logIn } from "../../action/AuthAction";
import { signUp } from "../../api/AuthRequest";


const Auth=()=>{
    {/*integration starting useState{false} after write useState{true}*/}
    const [isSignUp, setIsSignUP] = useState(true)
    const dispatch = useDispatch;
    const [data, setData] = useState({Firstname: "", Lastname: "", Password: "", Confirmpassword: "", Username: ""})

    const [ConfirmPass, setConfirmPass] = useState(true)
    const handlechange = (e) =>{
                setData({...data, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp)
        {
            data.Password  === data.ConfirmPass 
            ? dispatch(signUp(data))
            : setConfirmPass(true);
        }else
        {
            dispatch(logIn(data))
        }
    };

    const resetForm=()=>{
        setConfirmPass(true);
        setData({
            Firstname: "", 
            Lastname: "", 
            Password: "", 
            Confirmpass: "", 
            Username: "",
        });
    }
    return(
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <img src={Logo} alt=""/>
                <div className="webname">
                    <h1>Social Media</h1>
                    <h6>Explore the ideas througout the world</h6>
                </div>
            </div>
             
             {/* Right Side*/}
             <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
                {/* remove <h3>SignUp</h3> and =>(integartion) => <h3>{isSignUp ? "Sign up" : "Log In"}</h3> */}   
                <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

                   {/*integartion*/}   
                    {isSignUp && 

                    <div>
                      <input type="text" 
                      placeholder="First Name" 
                      className="infoInput" 
                      name="Firstname"
                      onchange = {handlechange}
                     // value = {data.Firstname}
                      />
                      
                      <input type="text" 
                      placeholder="Last Name" 
                      className="infoInput" 
                      name="Lastname"
                      onchange = {handlechange}
                    //  value = {data.Lastname}
                      />
                  </div>
                    } 
                  
                <div>
                    <input type="text" 
                    className="infoInput" 
                    name="username" 
                    placeholder="Username"/>
                </div>

                <div>
                    <input type="password" 
                    className="infoInput"
                    name="password" 
                    placeholder="Password"
                    onchange = {handlechange}
                    value = {data.Confirmpass} 
                    />
               
                    {/*integartion*/}               
                    {isSignUp && (
                        <input type="password" 
                        className="infoInput"
                        name="confirmpass" 
                        placeholder="Confirm Password"
                        onchange = {handlechange}
                        value = {data.ConfirmPass}
                        />
                    )}

                </div>
                <span style={{display: ConfirmPass? "none": "block", color: 'red', fontsize: '12px', alignSelf: "flex-end", marginRight: '5px'}}>
                    * Confirm Password is not same
                </span>
               
               <div>
                <span style={{fontsize: '12px', cursor: "pointer"}} 
                onClick = {()=> {setIsSignUP((prev)=>!prev); resetForm()}}
                >

                    {isSignUp? "Already have an account. Login!" : "Don't have an account? Sign UP"}
                    
                </span>
                </div>
                <button className="button infoButton" type="submit">
                {isSignUp ? "Signup" : "Log In"}
                </button>
            </form>
        </div>
           
        </div>
    );
};

/* after complet frontent and backend integarion*/

/*Login form  => delet login form and sign up form and past on uper side in*/

export default Auth