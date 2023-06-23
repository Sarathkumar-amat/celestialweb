import axios from "axios";

export const getUserPost = async (userName)=>{

    try{
        const response = await axios.get(`/api/posts/user/${userName}`)
        console.log(response.data.posts);
        if(response.status===200)
        {
            return response.data.posts;
        }
    }
    catch(error){
        console.log(error);
    }

} 
export const doPost = async (postObj,token,dispatch)=>{
    try{
        const response = await axios.post("/api/posts",{postData:postObj},{
            headers:{
                authorization:token
            }
        })
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }

}