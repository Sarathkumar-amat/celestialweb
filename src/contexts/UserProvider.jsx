import { createContext, useEffect, useReducer } from "react"
import { userReducer } from "../reducer/UserReducer";
import axios from "axios";

export const UserContext = createContext();
export function UserProvider({children})
{
    const [userState,dispatchUser] = useReducer(userReducer,{
        allUserDetails:{},
        bookMarks:[],
        followers:[],
        following:[]
    })
    const token = localStorage.getItem("token");
    
    const getAllBookMarks = async(token)=>{
        console.log(token);
        try{
        const response = await axios.get("/api/users/bookmark/",{
            headers:{
                authorization: token
            }
        })
        dispatchUser({type:"SET_BOOKMARKS",payload:response.data.bookmarks});
        console.log(response);
    }catch(error)
    {
        console.log(error);
    }
    }
    useEffect(()=>{
        getAllBookMarks(token)
    },[]);
    return (
        <div>    
            <UserContext.Provider value={{userState,dispatchUser}}>
                {children}
            </UserContext.Provider>
        </div>
)
}