import { useContext } from "react"
import { UserContext } from "../../../contexts/UserProvider"
import { doFollow, doUnfollow } from "../../../Services/UserServices";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export function AllUsers()
{
    const {userState,dispatchUser} = useContext(UserContext);
    const {user,setUser} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const checkFollowing = (userId) =>{
        return user?.following?.find(({_id})=>_id===userId)?true:false;
    }
    return (<div>
        {userState?.allUsers.map(({_id,username})=>
        <div>{username}
       {!checkFollowing(_id) &&  <button onClick={()=>doFollow(_id,token,setUser)}>Follow</button>}
        {checkFollowing(_id) && <button onClick={()=>doUnfollow(_id,token,setUser)}>unfollow</button>}
        </div>)}
        <button onClick={()=>navigate("/profile")}>profile</button>
    </div>)
}