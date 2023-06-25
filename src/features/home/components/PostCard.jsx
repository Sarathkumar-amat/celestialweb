import { addBookMark, removeBookMark } from "../../../Services/bookMarkServices"
import { doDeletePost } from "../../../Services/getPostServices"
import { addLike, doDislike } from "../../../Services/likeServices"
import { checkBookMarked } from "../../../backend/utils/checkBookMark"
import { checkIfLikedByUser } from "../../../backend/utils/checkLike"
import { AuthContext } from "../../../contexts/AuthProvider"
import { PostContext } from "../../../contexts/PostProvider"
import { UserContext } from "../../../contexts/UserProvider"
import "./PostCard.css"
import {useContext} from "react"

export function PostCard({singlePost})
{
    const {content,username,createdAt,updatedAt} = singlePost
    const {postState,dispatchPost} = useContext(PostContext);
    const {userState,dispatchUser} = useContext(UserContext);
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const userValues = user;
    const date = new Date(createdAt);
    // console.log(date);
    // console.log(user);
    // console.log(userValues.userData?.username);
    return (<div className="postCard">
       <p>{username}</p> 
        <p>{content}</p>
        <p>{createdAt}</p>
        <p>{updatedAt}</p>
      
        
        {checkIfLikedByUser(postState?.posts,singlePost?._id,userValues?.username) &&
       
        <i onClick={()=>doDislike(singlePost?._id,token,dispatchPost)} style={{color:"red"}} class="bi-heart-fill"></i>}
       {!checkIfLikedByUser(postState?.posts,singlePost?._id,userValues?.username) &&
        <i onClick={()=>addLike(singlePost?._id,token,dispatchPost)} class="bi-heart"></i>}
         <i class="bi-chat-left"></i>
        <i class="bi-share"></i>
        {!checkBookMarked(userState.bookMarks,singlePost?._id) ? <i onClick={()=>addBookMark(singlePost?._id,token,dispatchUser)}class="bi-bookmark"></i>
       : <i onClick={()=>removeBookMark(singlePost?._id,token,dispatchUser)} class="bi-bookmark-fill"></i>}
        <button onClick={()=>doDeletePost(singlePost?._id,token,dispatchPost)}>delete</button>
    </div>)
}