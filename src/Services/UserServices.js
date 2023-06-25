import axios from "axios"

export const getAllUsers = async(dispatchUser)=>{
    try{
        const response = await axios.get("/api/users");
        if(response.status===200)
        {
            console.log(response);
            return response.data.users;
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
export const doFollow = async(followUserId,token,setUser)=>{
    try{
        const response = await axios.post(`/api/users/follow/${followUserId}`,{},
        {
            headers:{
               authorization: token
            }
        })
        if(response.status===200)
        {
            localStorage.setItem("user",JSON.stringify(response.data.user));
            setUser(response.data.user);
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
export const doUnfollow = async(followUserId,token,setUser)=>{
    try{
        const response = await axios.post(`/api/users/unfollow/${followUserId}`,{},
        {
            headers:{
               authorization: token
            }
        })
        if(response.status===200)
        {
            localStorage.setItem("user",JSON.stringify(response.data.user));
            setUser(response.data.user);
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
export const doEdit = async(userData,token,setUser)=>
{
    try{
        const response = await axios.post("/api/users/edit",{userData},{
            headers:{
                authorization:token
            }
        })
        if(response.status===201)
        {
            localStorage.setItem("user",JSON.stringify(response.data.user));
            setUser(response.data.user);
        }
    }
    catch(error)
    {
        console.log(error)
    }
}