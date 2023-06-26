export const checkBookMarked = (bookMarkArray,postId)=>{
    const result = bookMarkArray.find(({_id})=>_id===postId)?true:false;
    return result;
}