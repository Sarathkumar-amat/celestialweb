export const checkBookMarked = (bookMarkArray,postId)=>{
    return bookMarkArray.find(id=>id===postId)?true:false;
}