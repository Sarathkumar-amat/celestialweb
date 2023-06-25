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
        if(response.status===201)
        {
          console.log(response);
          dispatch({type:"ADD_POST",payload:response.data.posts});
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
export const doDeletePost = async(postId,token,dispatch)=>{

    try{
        const response = await axios.delete(`/api/posts/${postId}`,{
            headers:{
                authorization:token
            }
        })
        console.log(response);
        dispatch({type:"DELETE_POST",payload:response.data.posts})
    }
    catch(error)
    {
        console.log(error)
    }
}