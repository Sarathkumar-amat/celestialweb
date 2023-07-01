import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { EditProfile } from "./components/EditProfile";
import "./Profile.css"
import { useEffect } from "react";
import { getUserPost } from "../../Services/getPostServices";
import { useState } from "react";
import { UserPost } from "./components/UserPost";
import { PostContext } from "../../contexts/PostProvider";
import { FollowingList } from "./components/FollowingList";
import { useRef } from "react";

export function Profile()
{
    const {user} = useContext(AuthContext);
    const {postState,dispatchPost} = useContext(PostContext);
    const [editModel,setEditModel] = useState(false);
    const [userPosts,setUserPosts] = useState([]);
    const [followingModel,setFollowingModel] = useState(false);
    console.log(user);
    const followRef=useRef();
   const getPostFromAPI = async (userName)=>{
    const postData = await getUserPost(userName);
    setUserPosts(postData);
   }
   console.log(user);
   useEffect(()=>{
        document.addEventListener("click",(event)=>{
            console.log(followingModel);
            console.log(followRef.current);
            if(followRef.current && !followRef.current.contains(event.target))
            {
                console.log("is it here?")
                setFollowingModel(false);
            }
        })
   },[])
   const handleFollowDisplay = (e)=>
   {
    e.stopPropagation();
    console.log("handling");
    setFollowingModel(true);
   }
    useEffect(()=>{
        getPostFromAPI(user?.username)},[setUserPosts]);


        // console.log(userPosts);
    return (<div className="profileParent">

            <div>
            {editModel && <EditProfile closeModal={setEditModel}/>}
            </div>
            
                {followingModel && <FollowingList setFollowing={setFollowingModel} currRef={followRef}/>}
           
        <div className="child1">
        </div>
       
        <div>
        <div className="myPersonal">
            <div className="userProfileImgContainer">
                <img className="profileImg" src={user?.profileImg} alt="profile"/>
            </div>
            <div className="bioActivity">
                <div className="bioEdit">
                    <div className="bioData">
                        <div className="userFullName">{user?.firstName} {user?.lastName}</div>
                        <p>@{user?.username}</p>
                        <p>{user?.bio}</p>
                    </div>
                   <button className="editButton" onClick={()=>setEditModel(!editModel)}>Edit profile</button>
                </div>
                
                <div className="myActivity">
                    <p>{user?.followers.length} followers</p>
                    <div onClick={(e)=>handleFollowDisplay(e)}>{user?.following.length} following</div>
                </div>
                
            </div>
        </div>
            <h2>Your Posts</h2>
            <div>{userPosts?.map(post=><div>
                <UserPost singlePost={post} />
            </div>)}</div>
        </div>
    </div>)
}