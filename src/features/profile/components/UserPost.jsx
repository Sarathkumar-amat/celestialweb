import { useState } from "react"
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
import { Menu } from "./Menu"
import { useEffect } from "react"
import { useRef } from "react"
import { EditPost } from "./EditPost"
import { getFormatDate } from "../../../Utils/getFormattedData"

export function UserPost({singlePost})
{
    const {content,username,createdAt,updatedAt} = singlePost;
    const {postState,dispatchPost} = useContext(PostContext);
    const {userState,dispatchUser} = useContext(UserContext);
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const userValues = user;
    const date = new Date(createdAt);
    const menuRef = useRef();
    const editRef = useRef();
    const [showMenu,setShowMenu] = useState(false);
    const [showEdit,setShowEdit] = useState(false);
    // console.log(date);
    // console.log(user);
    // console.log(userValues.userData?.username);
    
   
    const getUser = findUser(userState?.givenUsers,username);
    useEffect(()=>{
        document.addEventListener("click",(event)=>{
            event.stopPropagation();
            // console.log(e.target===menuRef.current);
            if(event.target!==menuRef.current)
            {
                setShowMenu(false);
            }
            // console.log("here there editprofile")
            console.log(editRef.current);
            if(editRef.current && !editRef.current.contains(event.target))
            {
                setShowEdit(false);
            }
        })
    },[])
    // window.addEventListener("click",(e)=>{
    //     e.stopPropagation();
    //     // console.log(e.target===menuRef.current);
    //     console.log("edit box");
        
    // })
    // console.log(showMenu);
    return (<div className="postCard">
        <div className="opDetails">
            <div className="OpAndEdit">
                <div className="opPersonal">
                    <div className="nameAndDate">
                        <div className="myPic-container">
                            <img src={user?.profileImg} alt="profileImage" />
                        </div>
                        <div>
                            <div  className="fullName">{getUser?.firstName} {getUser?.lastName}</div>
                            <div className="userName">@{username}</div> 
                        </div>
                        <div className="createdDate">{getFormatDate(createdAt)}</div>
                    </div>
                    {/* <div className="userName">@{username}</div>  */}
                </div>
                <div ref={menuRef} className="buttonMenu">
                    <div ref={menuRef} className="editOptions">
                        <i ref={menuRef} onClick={(e)=>{
                                e.preventDefault();
                                setShowMenu(prev=>!prev);
                                e.stopPropagation();
                            }
                    } class="bi bi-three-dots-vertical"></i>
                    </div>
                    <div ref={menuRef}>{showMenu && <div ref={menuRef}> <Menu postObj={singlePost} refr={menuRef} setMenu={setShowMenu} setEdit={setShowEdit}/> </div>}</div>
                    {showEdit && <div className="EditBg"><EditPost postObj={singlePost} setEdit={setShowEdit} editRef={editRef}/></div>}
                </div>
            </div>
       </div>
        <p>{content}</p>
       {singlePost?.coverImg && <img src={singlePost?.coverImg} height="100px" width="100px" alt="contentImage"/>}
        {/* <p></p>
        <p>{updatedAt}</p> */}
      
        <div className="postCardOptions">
            <div className="LikeContainer">
                {checkIfLikedByUser(postState?.posts,singlePost?._id,userValues?.username) &&
                <i onClick={()=>doDislike(singlePost?._id,token,dispatchPost)} 
                style={{color:"red"}} class="bi-heart-fill"></i>}
                {!checkIfLikedByUser(postState?.posts,singlePost?._id,userValues?.username) &&
                <i onClick={()=>addLike(singlePost?._id,token,dispatchPost)} class="bi-heart"></i>}
                <div className="likeCount">{singlePost?.likes?.likeCount}</div>
            </div>
            <i class="bi-chat-left"></i>
            <i class="bi-share"></i>
            {!checkBookMarked(userState.bookMarks,singlePost?._id) ? 
            <i onClick={()=>addBookMark(singlePost?._id,token,dispatchUser)}class="bi-bookmark"></i>
                : <i onClick={()=>removeBookMark(singlePost?._id,token,dispatchUser)} class="bi-bookmark-fill"></i>}
        </div>
    </div>)
}
{/* <button onClick={()=>doDeletePost(singlePost?._id,token,dispatchPost)}>delete</button> */}