import axios from "axios";
import { toast } from "react-toastify";

export const getUserPost = async (userName)=>{

    try{
        const response = await axios.get(`/api/posts/user/${userName}`)
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
        if(response.status===201)
        {
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
        dispatch({type:"DELETE_POST",payload:response.data.posts})
        toast.warning("Post Deleted",{
            position: toast.POSITION.BOTTOM_RIGHT
          })
    }
    catch(error)
    {
        console.log(error)
    }
}
export const doEditPost = async (postId,postData,token,dispatch)=>{
    try{
        const response = await axios.post(`/api/posts/edit/${postId}`,{postData},{
            headers:{
                authorization:token
            }
        })
        if(response.status==201)
        {
            dispatch({type:"EDIT_POST",payload:response.data.posts});
        }

    }catch(error)
    {
        console.log(error);
    }
}