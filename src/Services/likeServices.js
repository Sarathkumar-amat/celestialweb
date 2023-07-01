import axios from "axios";

export const addLike = async(postId,encodedToken,dispatchPost)=>{
    try{
        console.log("like");
        console.log(encodedToken);
        const response = await axios.post(`/api/posts/like/${postId}`,{},
        {
            headers:{
                authorization:encodedToken,
        },
        });
        if(response.status===201)
        {
            console.log(response);
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
        console.log("dislike");
        console.log(postId);
        const response = await axios.post(`/api/posts/dislike/${postId}`,{},
        {
            headers:{
                authorization:encodedToken,
        },
        });
        if(response.status===201)
        {
            console.log(response);
            dispatchPost({type:"SET_POSTS",payload:response.data.posts})
        }
    }
    catch(error)
    {
        console.error(error);
    }
}

// createdAt: 
// "2023-06-30T16:57:44+05:30"
// firstName: 
// "Adarsh"
// followers: 
// []
// following: 
// []
// lastName: 
// "Balika"
// updatedAt: 
// "2023-06-30T16:57:44+05:30"
// username: 
// "adarshbalika"
// _id: 
// "x9rEfGhi-c"