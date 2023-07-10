import axios from "axios";

export const addLike = async(postId,encodedToken,dispatchPost)=>{
    try{
        const response = await axios.post(`/api/posts/like/${postId}`,{},
        {
            headers:{
                authorization:encodedToken,
        },
        });
        if(response.status===201)
        {
            dispatchPost({type:"SET_POSTS",payload:response.data.posts})
        }
    }
    catch(error)
    {
        console.error(error);
    }
}

export const doDislike = async(postId,encodedToken,dispatchPost)=>{
    try{
        const response = await axios.post(`/api/posts/dislike/${postId}`,{},
        {
            headers:{
                authorization:encodedToken,
        },
        });
        if(response.status===201)
        {
            dispatchPost({type:"SET_POSTS",payload:response.data.posts})
        }
    }
    catch(error)
    {
        console.error(error);
    }
}