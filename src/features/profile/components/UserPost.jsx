import { addBookMark, removeBookMark } from "../../../Services/bookMarkServices"
import { doDeletePost } from "../../../Services/getPostServices"
import { addLike, doDislike } from "../../../Services/likeServices"
import { checkBookMarked } from "../../../Utils/checkBookMark"
import { checkIfLikedByUser } from "../../../Utils/checkLike"
import { findUser } from "../../../Utils/userName"
import { AuthContext } from "../../../contexts/AuthProvider"
import { PostContext } from "../../../contexts/PostProvider"
import { UserContext } from "../../../contexts/UserProvider"
import "./UserPost.css"
import {useContext} from "react"

export function UserPost({singlePost})
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
    const getUser = findUser(userState?.givenUsers,username);
    return (<div className="postCard">
        <div className="opDetails">
            <div className="OpAndEdit">
                <div className="opPersonal">
                    <div>{username}</div> 
                    <div>{getUser?.firstName} {getUser?.lastName}</div>
                </div>
                <i class="bi bi-three-dots-vertical"></i>
            </div>
       </div>
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