import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { EditProfile } from "./components/EditProfile";
import "./Profile.css"
import { useEffect } from "react";
import { getUserPost } from "../../Services/getPostServices";
import { useState } from "react";
import { PostCard } from "../home/components/PostCard";

export function Profile()
{
    const {user} = useContext(AuthContext);
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
        <div className="child1">
        This is profile page
        </div>
       
        {/* <div className="overlay">
            <EditProfile />
        </div> */}
        <div>
            <h2>{user?.firstName} {user?.lastName}</h2>
            <p>@{user?.username}</p>
            <button>Edit profile</button>
            <p>{user?.followers.length} followers</p>
            <p>{user?.following.length} following</p>
            <h2>Your Posts</h2>
            <div>{userPosts?.map(post=><div>
                <PostCard singlePost={post} />
            </div>)}</div>
        </div>
    </div>)
}