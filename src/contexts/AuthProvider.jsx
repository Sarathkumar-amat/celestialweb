import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children})
{
    // localStorageUser?.user
    // console.log(localStorage.getItem("user"));
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    // const localStorageUser = localStorage.getItem("user");
    const [user,setUser] = useState(localStorageUser);
    const [loader,setLoader] = useState(false);
    const navigate=useNavigate();
    const getUser = async(userId)=>{
        console.log(userId);
        try{
            const res = await axios.get(`/api/users/${userId}`);
            console.log(res);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            setUser(res.data.user);
        }
        catch(error)
        {
            console.log(error);
        }
    }
 
    useEffect(()=>{
        if(user?.username)
        {
            getUser(user?._id);
        }
    },[])
    
   
    // const [user,setUser] = useState(null);
    // console.log(user);
    const loginUser = async (userName,passWord,location)=>{
        console.log("here login user");
        if(userName!=="" && passWord!=="")
        {
            try{
                const {status,data} = await axios.post("/api/auth/login",{
                    username:userName,
                    password:passWord
                })
                if(status===200){
                localStorage.setItem("user",JSON.stringify(data.foundUser));
                localStorage.setItem("token",data.encodedToken);
                setUser(data.foundUser);
                (location?.state===null)?navigate("/"):navigate(location?.state?.from?.pathname);
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }
    return (<div>
        <AuthContext.Provider value={{loginUser,user,setUser,loader,setLoader}}>
            {children}
        </AuthContext.Provider>
    </div>)

}