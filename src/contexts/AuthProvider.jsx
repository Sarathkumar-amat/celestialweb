import axios from "axios";
import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children})
{
    // localStorageUser?.user
    // console.log(localStorage.getItem("user"));
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    // const localStorageUser = localStorage.getItem("user");
    console.log(localStorageUser);
    const navigate=useNavigate();
    // localStorageUser?.user
    
    const [user,setUser] = useState(localStorageUser);
    const val = 28;
    // const [user,setUser] = useState(null);
    console.log(user);
    const loginUser = async (userName,passWord)=>{
        console.log("here login user");
        if(userName!=="" && passWord!=="")
        {
            try{
                const {status,data} = await axios.post("/api/auth/login",{
                    username:userName,
                    password:passWord
                })
                console.log(data);
                if(status===200){
                localStorage.setItem("user",JSON.stringify(data.foundUser));
                localStorage.setItem("token",data.encodedToken);
                
               
                console.log(data.foundUser);
                setUser(data.foundUser);
                navigate("/");
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }
    return (<div>
        <AuthContext.Provider value={{loginUser,user,setUser,val}}>
            {children}
        </AuthContext.Provider>
    </div>)

}