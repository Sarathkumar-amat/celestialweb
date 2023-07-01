import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export function Login()
{
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

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
        loginUser(uname,pass);
    }
    const handleTestUser = ()=>{
        setUname("adarshbalika");
        setPass("adarshBalika123");
    }
    const handleSignup=()=>{
        console.log("going to signup");
        navigate("/signUp")
    }
    return(<div>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <label>User Name</label>
            <input type="text" onChange={(event)=>handleUserName(event)}/>
            <label>Password</label>
            <input type="password" onChange={(event)=>handlePass(event)} />
            <button onClick={()=>handleTestUser()}>Submit</button>
        </form>
        <Link to="/signUp">Signup</Link>
       <div onClick={()=>handleSignup()}>Sign Up</div>
    </div>)
}