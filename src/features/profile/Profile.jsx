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
import { SideBar } from "../sidebar/SideBar";
import { AllUsers } from "../home/Suggestions/AllUsers";
import { FollowersList } from "./components/FollowersList";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { toast } from "react-toastify";

export function Profile()
{
    const {user,setUser,loader,setLoader} = useContext(AuthContext);
    const {postState,dispatchPost} = useContext(PostContext);
    const [editModel,setEditModel] = useState(false);
    const [userPosts,setUserPosts] = useState([]);
    const [followingModel,setFollowingModel] = useState(false);
    const [followersModel,setFollowersModel] = useState(false);
    const followRef=useRef();
    const followerRef = useRef();
    const navigate = useNavigate();
   const getPostFromAPI = async (userName)=>{
    const postData = await getUserPost(userName);
    setUserPosts(postData);
    setLoader(false);
   }
//    useEffect(()=>{
    
//    })
   useEffect(()=>{
        document.addEventListener("click",(event)=>{
            if(followRef.current && !followRef.current.contains(event.target))
            {
                setFollowingModel(false);
            }
            if(followerRef.current && !followerRef.current.contains(event.target))
            {
                setFollowersModel(false);
            }
        })
   },[])
   const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser();
    navigate("/login");
    toast.warning("logged out!",{
        position: toast.POSITION.BOTTOM_RIGHT
      })
}
   const handleFollowDisplay = (e)=>
   {
    e.stopPropagation();
    setFollowingModel(true);
   }
   const handleFollowersDisplay = (e)=>{
    e.stopPropagation();
    setFollowersModel(true);    
   }
   useEffect(()=>{setLoader(true)},[]);
    useEffect(()=>{
        // setLoader(true);
        getPostFromAPI(user?.username)},[postState]);


        // console.log(userPosts);
    return (<div className="profileParent">
            {/* <div className="sideBar"><SideBar /></div> */}
            
        <div className="profilePageContent">
            <div>
            {editModel && <EditProfile closeModal={setEditModel}/>}
            </div>
            {followersModel && <FollowersList setFollowers={setFollowersModel} currRef={followerRef}/>}
            {followingModel && <FollowingList setFollowing={setFollowingModel} currRef={followRef}/>}
        <div className="myPersonal">
            <div className="myProfileImg-container">
                <img className="profileImg" src={user?.profileImg} alt="profile"/>
            </div>
            <div>
            <div className="bioActivity">
                <div className="bioEdit">
                    <div className="bioData">
                        <div className="userFullName">{user?.firstName} {user?.lastName}</div>
                        <div>@{user?.username}</div>
                        <p>{user?.bio}</p>
                       <div> <a href={user?.website}>{user?.website}</a></div>
                    </div>
                    <div className="editLogout">
                        <button className="editButton" onClick={()=>setEditModel(!editModel)}>Edit profile</button>
                        <div className="logout" onClick={()=>handleLogout()}><i class="bi bi-box-arrow-right"></i></div>
                   </div>
                </div>
                
                <div className="myActivity">
                    <div>{userPosts?.length} posts</div>
                    <div onClick={(e)=>handleFollowersDisplay(e)}>{user?.followers?.length} followers</div>
                    <div onClick={(e)=>handleFollowDisplay(e)}>{user?.following?.length} following</div>
                </div>
                
            </div>
            </div>
        </div>
            <h2>Your Posts</h2>
            <div>{userPosts?.map(post=><div>
                <UserPost singlePost={post} />
            </div>)}</div>
        </div>
        {/* <div className="allUsers"><AllUsers /></div> */}
    </div>)
}