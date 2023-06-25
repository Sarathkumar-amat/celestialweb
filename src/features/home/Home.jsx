import { useContext, useReducer, useState } from "react"
import { PostContext } from "../../contexts/PostProvider"
import { PostCard } from "./components/PostCard";
import { sortFilter } from "./filterFunctions/SortFilter";
import { AllUsers } from "./Suggestions/AllUsers";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { doPost } from "../../Services/getPostServices";
import "./Home.css";

export function Home()
{
    const {postState,dispatchPost} = useContext(PostContext);
    const {user,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    let displayPosts = postState?.posts;
    const token = localStorage.getItem("token");
    displayPosts = sortFilter(displayPosts,postState?.sortType);
    const handleLogout = ()=>{
        console.log(user);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser();
        console.log(localStorage.getItem("token"));
        console.log(user);
        navigate("/login");
    }
    const handleSubmitPost = (event)=>{
            event.preventDefault();
            if(postContent!=="")
            {
                console.log("going to post")
                doPost({content:postContent},token,dispatchPost)
                setPostContent("");
            }
    }
 
    const [postContent, setPostContent] = useState("");
    console.log(postContent);
    return (<div className="HomePage">
        <div className="homeComponent">
            <form onSubmit={(event)=>handleSubmitPost(event)}>
        <div className="postComp">
        <div>
            <div className="profileImgContainer">
                <img className="profileImg" src={user?.profileImg} alt="profile"/>
            </div>
        </div>
            <textarea value={postContent} className="postText" onChange={(event)=>setPostContent(event.target.value)} 
            placeholder="Hey! What's happening"></textarea>
            <div className="submitContainer">
                <button className="postButton">Submit</button>
            </div>
        </div>
       
            </form>
            <h2>Latest Posts</h2>
            {/* <img src="http://surl.li/ijvfa" alt="profile"/>  */}
        <p> {user?.following.length}</p>
            {(postState?.sortType==="oldest" || postState?.sortType==="") && 
            <button onClick={()=>dispatchPost({type:"SET_SORT",payload:"latest"})}>latest</button>}
            {postState?.sortType==="latest" && 
            <button onClick={()=>dispatchPost({type:"SET_SORT",payload:"oldest"})}>oldest</button>}
            {displayPosts?.map(postData=>
            
            <div className="individualPost"> <PostCard singlePost={postData}/></div>)}
            <button onClick={()=>handleLogout()}>logout</button>
        </div>
        {/* <div className="Suggestions">
            <AllUsers />
        </div> */}
    </div>)
}