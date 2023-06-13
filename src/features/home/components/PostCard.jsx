import { addLike, doDislike } from "../../../Services/likeServices"
import { checkIfLikedByUser } from "../../../backend/utils/checkLike"
import { AuthContext } from "../../../contexts/AuthProvider"
import { PostContext } from "../../../contexts/PostProvider"
import "./PostCard.css"
import {useContext} from "react"

export function PostCard({singlePost})
{
    const {content,username,} = singlePost
    const {postState,dispatchPost} = useContext(PostContext);
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const userValues = JSON.parse(user);
    console.log(userValues.userData?.username);
    return (<div className="postCard">
       <p>{username}</p> 
        <p>{content}</p>
        
        {checkIfLikedByUser(postState?.posts,singlePost?._id,userValues.userData?.username) &&
       
        <i onClick={()=>doDislike(singlePost?._id,token,dispatchPost)} style={{color:"red"}} class="bi-heart-fill"></i>}
       {!checkIfLikedByUser(postState?.posts,singlePost?._id,userValues.userData?.username) &&
        <i onClick={()=>addLike(singlePost?._id,token,dispatchPost)} class="bi-heart"></i>}
         <i class="bi-chat-left"></i>
        <i class="bi-share"></i>
        <i class="bi-bookmark"></i>
        <i class="bi-bookmark-fill"></i>

    </div>)
}