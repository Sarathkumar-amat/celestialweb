import { createContext, useEffect, useReducer } from "react"
import { userReducer } from "../reducer/UserReducer";
import axios from "axios";
import { getAllUsers } from "../Services/UserServices";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext();
export function UserProvider({children})
{
    const {user,setUser,val} = useContext(AuthContext);
    // console.log(user); 
    // console.log(val);
   
    const [userState,dispatchUser] = useReducer(userReducer,{
        allUserDetails:{},
        bookMarks:[],
        followers:[],
        following:[],
        allUsers:[],
        givenUsers:[]
    })
    const token = localStorage.getItem("token");
    console.log(userState.allUsers);
    const getAllUsersFromAPI = async()=>{
        const users = await getAllUsers(dispatchUser);
        dispatchUser({type:"SET_USERS",payload:users});
        const userList = users.filter(({username})=>username!==user?.username);
        dispatchUser({type:"SET_ALL_USERS",payload:userList})
    }
    const getAllBookMarks = async(token)=>{
        try{
        const response = await axios.get("/api/users/bookmark/",{
            headers:{
                authorization: token
            }
        })
        dispatchUser({type:"SET_BOOKMARKS",payload:response.data.bookmarks});
    }catch(error)
    {
        console.log(error);
    }
    }
    useEffect(()=>{
        getAllBookMarks(token)
        getAllUsersFromAPI()
        
    },[dispatchUser,user]);
    return (
        <div>    
            <UserContext.Provider value={{userState,dispatchUser}}>
                {children}
            </UserContext.Provider>
        </div>
)
}