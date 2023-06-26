export function findUser(userArray,userName)
{
    console.log(userArray);
    console.log(userName);
    let result = userArray?.find(({username})=>username===userName);
    console.log(result);
    return result;
    
}