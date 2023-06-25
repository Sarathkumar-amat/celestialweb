import { useContext } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserProvider";
import "./IndividualProfile.css";
import { PostContext } from "../../contexts/PostProvider";
import { AuthContext, AuthProvider } from "../../contexts/AuthProvider";
import { doFollow, doUnfollow } from "../../Services/UserServices";

export function IndividualProfile()
{
    const {userName} = useParams();
    const {userState,dispatchUser} = useContext(UserContext);
    const {postState,dispatchPost} = useContext(PostContext);
    const {user,setUser} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    console.log(userName);
    console.log(userState.allUsers);
    const reqdUser = userState?.allUsers?.find(({username})=>username===userName);
    const userPosts = postState?.posts?.filter(({username})=>username===userName);
    console.log(reqdUser);
    const checkFollowing = (userId) =>{
        return user?.following?.find(({_id})=>_id===userId)?true:false;
    }
    return (<div className="IndividualProfile">
        {/* <h2>This is individual Profile profile page</h2> */}
        <div className="userInfo">
            <div className="userProfileImgContainer">
                    <img className="profileImg" src={reqdUser?.profileImg} alt="profile"/>
            </div>
        <div className="userPersonal">
            <div className="personalFollow">
                <div>
                    <div>{reqdUser?.firstName} {reqdUser?.lastName}</div><br />
                    <div>@{reqdUser?.username}</div>
                    <div>{reqdUser?.bio}</div>
                </div>
                {!checkFollowing(reqdUser?._id) &&  <button className="followButton" onClick={()=>doFollow(reqdUser?._id,token,setUser)}>Follow</button>}
                {checkFollowing(reqdUser?._id) && <button className="followButton" onClick={()=>doUnfollow(reqdUser?._id,token,setUser)}>unfollow</button>}
            </div>
           
            <div className="activityDetails">
                <div>{userPosts?.length} posts</div>
                <div>{reqdUser?.followers?.length} followers</div>
                <div>{reqdUser?.following?.length} following</div>
            </div>
        </div>
        </div>
    </div>)
}