import axios from "axios";
import { createContext,useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children})
{
    // localStorageUser?.user
    const localStorageUser = localStorage.getItem("user");
    // localStorageUser?.user
    const [user,setUser] = useState(localStorageUser);
    console.log(user);
    const loginUser = async (userName,passWord)=>{
        console.log("here login user");
        if(userName!=="" && passWord!=="")
        {
            try{
                const response = await axios.post("/api/auth/login",{
                    username:userName,
                    password:passWord
                })
                console.log(response);
                if(response.status===200){
                    console.log(typeof response.data.foundUser);
                localStorage.setItem("token",response.data.encodedToken);
                localStorage.setItem("user",JSON.stringify({ userData: response.data.foundUser   }));
                setUser(response.data.foundUser);
                }
            }
            catch(error)
            {
                console.error(error);
            }
        }
    }
    return (<div>
        <AuthContext.Provider value={{loginUser,user}}>
            {children}
        </AuthContext.Provider>
    </div>)

}