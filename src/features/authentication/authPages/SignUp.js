import { useContext, useReducer, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";
import { AuthContext } from "../../../contexts/AuthProvider";


function signUpReducer(state,action)
{
    switch(action.type)
    {
        case "setFirstName":
            return {...state,firstName:action.payload};
        case "setLastName":
            return {...state,lastName:action.payload};
        case "setUserName":
            return {...state,userName:action.payload};
        case "setEmail":
            return {...state,userEmail:action.payload};
        case "setPassword":
            return {...state,password:action.payload};
        case "setConfirmPassword":
            return {...state,confirmPassword:action.payload}
        default:
            console.log("something went wrong");
            return {...state}
    }
}

export function SignUp()
{
    const navigate = useNavigate();
    const [passwordType,setPasswordType] = useState("password");
    // const location = useLocation();
    const {user,setUser} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(signUpReducer,{
        firstName:"",
        lastName:"",
        userName:"",
        userEmail:"",
        password:"",
        confirmPassword:""
    })
    const sendData = {
        username: userState.userName,
        password: userState.password,
        firstName: userState.firstName,
        lastName: userState.lastName,
        email:userState.userEmail
        
    }
    const handlePassword = ()=>{
        setPasswordType((previous)=>previous==="password"?"text":"password");
    }
    const signupHandler = async (e) => {
        e.preventDefault();
        if(userState.password!==userState.confirmPassword){
            alert("Passwords don't match");
        }
        else{
            try {
                const response =  await axios.post(`/api/auth/signup`,{...sendData});
                // saving the encodedToken in the localStorage;
                console.log(response)
                if(response.status===201)
                {
                   
                    localStorage.setItem("token", response.data.encodedToken);
                    localStorage.setItem("user",  JSON.stringify({ user: response.data.createdUser }));
                    
                    setUser({...response.data.createdUser,profileImg:"https://rb.gy/tc5co"});
                    navigate("/");
                    // console.log(loginState.user);
                    // navigate(location?.state?.from?.pathname);
                }
            } catch (error) {
                console.log(error);
            }
        }
      };
    return (<div className="createAccountDetail">
        <form className="signUpForm" onSubmit={(event)=>signupHandler(event)}>
            
                <div className="firstName">
                    <label htmlFor="firstNameInp">First Name</label>
                    <input required className="firstnameInp" type="text" onChange={(event)=>reduceFun({type:"setFirstName",payload:event.target.value})} />
                </div>
                <div className="lastName">
                    <label htmlFor="lastNameInp">Last Name</label>
                    <input required className="lastNameInp" type="text" onChange={(event)=>reduceFun({type:"setLastName",payload:event.target.value})}/>
                </div>
                <div className="usersName">
                    <label htmlFor="userNameInp">UserName</label>
                    <input className="userNameInp" required type="text" onChange={(event)=>reduceFun({type:"setUserName",payload:event.target.value})}/>
                </div>
                <div className="emailNew">
                    <label htmlFor="emailInp">Email</label>
                    <input className="emailInp" required type="email" onChange={(event)=>reduceFun({type:"setEmail",payload:event.target.value})}/>
                </div>
                <div className="pwd">
                    <label>Password</label>
                    <div className="pwdContainer">
                        <input className="pwdInput" required type={passwordType} onChange={(event)=>reduceFun({type:"setPassword",payload:event.target.value})} />
                        {passwordType==="password" ? <i onClick={()=>handlePassword()} className="bi bi-eye" id="eye"></i>
                            :<i onClick={()=>handlePassword()} className="bi bi-eye-slash" id="eye"></i>}
                    </div>
                </div>
                <div className="confPwd">
                    <label>Confirm Password</label>
                    <div className="pwdContainer">
                        <input className="pwdInput" required type={passwordType} onChange={(event)=>
                            reduceFun({type:"setConfirmPassword",payload:event.target.value})} />
                        {passwordType==="password" ? <i onClick={()=>handlePassword()} class="bi bi-eye" id="eye"></i>
                                :<i onClick={()=>handlePassword()} class="bi bi-eye-slash" id="eye"></i>}
                    </div>
                </div>
            <button className="signUpButton">Sign up</button>
        </form>
    </div>)
}