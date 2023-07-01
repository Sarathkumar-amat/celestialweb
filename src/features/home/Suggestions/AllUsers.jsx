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
        <div className="SuggestionTitle">Suggestions for you</div>
       <div className="allUsers"> {displayUsers.map(({_id,username,firstName,lastName,profileImg})=>
            <div>
                <div className="userBlock">
                    <div className="userImgContainer">
                        <img src={profileImg} alt="profile"/>
                    </div>
                    <div className="userNameDetails" onClick={()=>navigate(`/userProfile/${username}`)}>
                        <div>{firstName} {lastName} </div>
                        <div>@{username}</div>
                    </div>
                    <div className="doFollow" onClick={()=>doFollow(_id,token,setUser)}>Follow</div>
                 </div>
            <hr></hr>
        </div>)}  
        </div>
    </div>)
}
// {checkFollowing(_id) && <button className="followButton" onClick={()=>doUnfollow(_id,token,setUser)}>unfollow</button>}