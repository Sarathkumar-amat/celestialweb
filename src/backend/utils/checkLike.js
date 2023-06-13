export const checkIfLikedByUser = (postArray,postId,userName)=>{
    const currentPost = postArray.find(({_id})=>_id===postId);
    console.log(userName);
    console.log(currentPost.likes);
   const retVal = currentPost.likes.likedBy.find(({username})=>username===userName)?true:false;
   console.log(retVal);
   return (retVal)
}