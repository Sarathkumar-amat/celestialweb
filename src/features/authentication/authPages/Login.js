import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

export function Login()
{
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const [passwordType,setPasswordType]=useState("password");
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handlePassword = ()=>{
        setPasswordType((previous)=>previous==="password"?"text":"password");
    }
    const handleUserName = (event)=>{
        setUname(data=>event.target.value);
    }
    // useEffect(()=>{
    //     loginUser(uname,pass)
    // },[uname,pass])
    const handlePass = (event)=>{
        setPass(data=>event.target.value);
    }
    const handleSubmit = (e)=>{
        console.log(uname);
        e.preventDefault();
        loginUser(uname,pass,location);
    }
    const handleTestUser = ()=>{
        setUname("adarshbalika");
        setPass("adarshBalika123");
    }
    const handleSignup=()=>{
        console.log("going to signup");
        navigate("/signUp")
    }
//     return(<div>
//         <form onSubmit={(event)=>handleSubmit(event)}>
//             <label>User Name</label>
//             <input type="text" onChange={(event)=>handleUserName(event)}/>
//             <label>Password</label>
//             <input type="password" onChange={(event)=>handlePass(event)} />
//             <button onClick={()=>handleTestUser()}>Submit</button>
//         </form>
//         <Link to="/signUp">Signup</Link>
//        <div onClick={()=>handleSignup()}>Sign Up</div>
//     </div>)
// }

return (<div className="loginPage">
<form className="LoginDetails" onSubmit={(event)=>handleSubmit(event)}>
<div className="email">
    <label >Email</label>
    <input placeholder="test@gmail.com" className="loginText" type="text" onChange={(event)=>handleUserName(event)}/>
</div>
<div className="pwd">
    <label>Password</label>
    <div className="passwordContainer">
        <input placeholder="test@23" className="loginText" type={passwordType} onChange={(event)=>handlePass(event)} />
      {passwordType==="password" ? <i onClick={()=>handlePassword()} class="bi bi-eye" id="eye"></i>
        :<i onClick={()=>handlePassword()} class="bi bi-eye-slash" id="eye"></i>}
    </div><i class="bi bi-eye"></i>
</div>

    <button className="loginButton" onClick={()=>handleTestUser()}>Login with test credentials</button>
    <button className="loginButton">Login</button>

    {/* <button className="signUpButton" onClick={testLoginHandler}>Login with test credentials</button>
    <button onClick={()=>handleTestUser()} className="loginButton">Login</button>
    <div onClick={()=>navigate("/signUp")} className="doSignUp">
        Create New Account
    </div> */}
        <div className="signUp">
            <div>Don't have an account?</div> 
            <div className="signUpLink" onClick={()=>handleSignup()}>Sign Up</div>
        </div>
</form>
{/* <div onClick={()=>handleSignup()}>Sign Up</div> */}
</div>)
}