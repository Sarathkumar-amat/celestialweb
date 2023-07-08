import { useContext } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserProvider";
import "./IndividualProfile.css";
import { PostContext } from "../../contexts/PostProvider";
import { AuthContext, AuthProvider } from "../../contexts/AuthProvider";
import { doFollow, doUnfollow } from "../../Services/UserServices";
import { PostCard } from "../home/components/PostCard";
import { useState } from "react";
import { FollowingAll } from "./FollowingAll";
import { useRef } from "react";
import { useEffect } from "react";
import { FollowersAll } from "./FollowersAll";
import { SideBar } from "../sidebar/SideBar";
import { AllUsers } from "../home/Suggestions/AllUsers";

export function IndividualProfile()
{
    const {userName} = useParams();
    const {userState,dispatchUser} = useContext(UserContext);
    const {postState,dispatchPost} = useContext(PostContext);
    const {user,setUser} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    const [followersModel,setFollowersModel] = useState(false);
    const [followingModel,setFollowingsModel] = useState(false);
    const reqdUser = userState?.allUsers?.find(({username})=>username===userName);
    const userPosts = postState?.posts?.filter(({username})=>username===userName);
    const followingRef = useRef();
    const followerRef = useRef();
    
    const checkFollowing = (userId) =>{
        return user?.following?.find(({_id})=>_id===userId)?true:false;
    }
    useEffect(()=>{
        document.addEventListener('click',(event)=>{
           
            if(followingRef.current && !followingRef.current.contains(event.target))
            {
                setFollowingsModel(false);
            }
            if(followerRef.current && !followerRef.current.contains(event.target))
            {
                setFollowersModel(false);
            }
        })
    },[])
    const handleFollowingClick = (e)=>{
        e.stopPropagation();
        setFollowingsModel(prev=>!prev);
    }
    const handleFollowersClick = (e)=>{
        e.stopPropagation();
        setFollowersModel(prev=>!prev);
    }
    console.log(followingModel);
    return (<div className="profilePage">
        {/* <h2>This is individual Profile profile page</h2> */}
      
        {followingModel && <div> 
            <FollowingAll userObj={reqdUser} setFollowing={setFollowingsModel} currRef={followingRef}/>
        </div>}
        {followersModel && 
        <div><FollowersAll userObj={reqdUser} setFollowing={setFollowingsModel} currRef={followerRef}/></div>}
        
        <div className="IndividualProfile">
            <div>
                <div className="userInfo">
                    <div className="user-profileImg-container">
                            <img className="profile-Img" src={reqdUser?.profileImg} alt="profile"/>
                    </div>
                    <div className="userPersonal">
                        <div className="personalFollow">
                            <div>
                                <div className="fullName">{reqdUser?.firstName} {reqdUser?.lastName}</div>
                                <div className="userName">@{reqdUser?.username}</div>
                                <div className="userBio">{reqdUser?.bio}</div>
                            </div>
                            {!checkFollowing(reqdUser?._id) &&  <button className="followButton" onClick={()=>doFollow(reqdUser?._id,token,setUser)}>Follow</button>}
                            {checkFollowing(reqdUser?._id) && <button className="followButton" onClick={()=>doUnfollow(reqdUser?._id,token,setUser)}>unfollow</button>}
                        </div>
                    
                        <div className="activityDetails">
                            <div>{userPosts?.length} posts</div>
                            <div onClick={(e)=>handleFollowersClick(e)}>{reqdUser?.followers?.length} followers</div>
                            <div onClick={(e)=>handleFollowingClick(e)}>{reqdUser?.following?.length} following</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>{userPosts?.map((postObj)=>
            <div>
                <PostCard singlePost={postObj}/>
            </div>
        )}</div>
        </div>
       
       
    </div>)
}