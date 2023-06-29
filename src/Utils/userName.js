export function findUser(userArray,userName)
{
  
    let result = userArray?.find(({username})=>username===userName);
  
    return result;
    
}