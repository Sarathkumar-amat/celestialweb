import axios from "axios";

export const addBookMark = async(postId,token,dispatch)=>{
    console.log(postId);
    try{
        const response = await axios.post(`/api/users/bookmark/${postId}`,{},{
            headers:{
                authorization:token
            }
        })
        console.log(response);

        dispatch({type:"SET_BOOKMARKS",payload:response.data.bookmarks})
        
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
        console.log(response);
        dispatch({type:"SET_BOOKMARKS",payload:response.data.bookmarks})
    }catch(error)
    {
        console.error(error);
    }
}