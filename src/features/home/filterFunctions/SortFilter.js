export function sortFilter(postArray,sortType)
{
    if(sortType==="latest")
    {
        postArray = postArray.sort((a,b)=>{
            const d1 = new Date(a.createdAt);
            const d2 = new Date(b.createdAt);
            return d2-d1;
        })
    }
    else if(sortType==="oldest"){
        postArray = postArray.sort((a,b)=>{
            const d1 = new Date(a.createdAt);
            const d2 = new Date(b.createdAt);
            return d1-d2;
        })
    }
    else if(sortType==="trending")
    {
        postArray = postArray?.sort((a,b)=>b.likes.likeCount-a.likes.likeCount);
    }
    // else if(sortType==="trending")
    // {

    // }
   return postArray;
}
export function trendingSort(postArray,doTrending)
{
    if(doTrending)
    {
        const newArray = postArray?.sort((a,b)=>b.likes.likeCount-a.likes.likeCount);
        return newArray;
    }
    return postArray;
}