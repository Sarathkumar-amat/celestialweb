import { useContext } from "react"
import { UserContext } from "../../../contexts/UserProvider"
import { doFollow, doUnfollow } from "../../../Services/UserServices";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./AllUsers.css";

export function AllUsers()
{
    const {userState,dispatchUser} = useContext(UserContext);
    const {user,setUser} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const checkFollowing = (userId) =>{
        return user?.following?.find(({_id})=>_id===userId)?true:false;
    }
    return (<div className="userList">
        <h4>Suggestions for you</h4>
        {userState?.allUsers.map(({_id,username,firstname,lastname})=>
        <div>
            <div onClick={()=>navigate(`/userProfile/${username}`)}>@{username}</div>
       {!checkFollowing(_id) &&  <button onClick={()=>doFollow(_id,token,setUser)}>Follow</button>}
        {checkFollowing(_id) && <button onClick={()=>doUnfollow(_id,token,setUser)}>unfollow</button>}
        <hr></hr>
        </div>)}
        <button onClick={()=>navigate("/profile")}>profile</button>
    </div>)
}