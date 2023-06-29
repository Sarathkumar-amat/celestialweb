export function filterByFollowing(postArray,followingArray,userName)
{
    const myPosts = postArray.filter(({username})=>userName===username);
    const followings = followingArray?.map(({username})=>username);
    const followingPosts = postArray?.filter(({username})=>followings?.includes(username));
    return [...myPosts,...followingPosts];
    
}