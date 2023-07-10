import axios from "axios";
import { toast } from "react-toastify";

export const addBookMark = async(postId,token,dispatch)=>{
    
    try{
        const response = await axios.post(`/api/users/bookmark/${postId}`,{},{
            headers:{
                authorization:token
            }
        })
        

        dispatch({type:"SET_BOOKMARKS",payload:response.data.bookmarks})
        toast.success("Post Added to Bookmarks",{
            position: toast.POSITION.BOTTOM_RIGHT
          })
        
    }catch(error){
        console.error(error);
    }
}
export const removeBookMark = async(postId, token, dispatch)=>{
    try{
        const response = await axios.post(`/api/users/remove-bookmark/${postId}`,{},{
            headers:{
                authorization:token
            }
        })
        toast.warning("Post Removed from Bookmarks",{
            position: toast.POSITION.BOTTOM_RIGHT
          })
        dispatch({type:"SET_BOOKMARKS",payload:response.data.bookmarks})
    }catch(error)
    {
        console.error(error);
    }
}