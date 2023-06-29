export function checkIfFollowing(userName,followingArray)
{
    const check = followingArray?.find(({username})=>userName===username)?true:false;
    return check;
}