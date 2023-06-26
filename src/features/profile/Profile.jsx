import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { EditProfile } from "./components/EditProfile";
import "./Profile.css"
import { useEffect } from "react";
import { getUserPost } from "../../Services/getPostServices";
import { useState } from "react";
import { UserPost } from "./components/UserPost";

export function Profile()
{
    const {user} = useContext(AuthContext);
    const [editModel,setEditModel] = useState(false);
    const [userPosts,setUserPosts] = useState([]);
    console.log(user);
   const getPostFromAPI = async (userName)=>{
    const postData = await getUserPost(userName);
    setUserPosts(postData);
   }
    useEffect(()=>{
        getPostFromAPI(user?.username)},[user]);
        console.log(userPosts);
    return (<div className="profileParent">

            <div>
            {editModel && <EditProfile closeModal={setEditModel}/>}
            </div>
       
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
                    <p>{user?.following.length} following</p>
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