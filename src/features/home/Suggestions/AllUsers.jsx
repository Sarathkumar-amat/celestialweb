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
    // const checkFollowing = (userId) =>{
    //     return user?.following?.find(({_id})=>_id===userId)?true:false;
    // }
    console.log(user);
    const followingUsers = user?.following?.map(({username})=>username);
    const displayUsers = userState?.allUsers.reduce((initVal,current)=>!followingUsers?.includes(current?.username)?[...initVal,current]:initVal,[])
    return (<div className="userList">
        <h4>Suggestions for you</h4>
       <div className="allUsers"> {displayUsers.map(({_id,username,firstname,lastname})=>
            <div>
                <div className="userBlock">
                <div onClick={()=>navigate(`/userProfile/${username}`)}>@{username}</div>
           <button className="followButton" onClick={()=>doFollow(_id,token,setUser)}>Follow</button>
           
            </div>
            <hr></hr>
        </div>)}
            
        </div>
        <button onClick={()=>navigate("/profile")}>profile</button>
    </div>)
}
// {checkFollowing(_id) && <button className="followButton" onClick={()=>doUnfollow(_id,token,setUser)}>unfollow</button>}