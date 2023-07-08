import { useContext, useReducer, useState } from "react"
import { PostContext } from "../../contexts/PostProvider"
import { PostCard } from "./components/PostCard";
import { sortFilter, trendingSort } from "./filterFunctions/SortFilter";
import { AllUsers } from "./Suggestions/AllUsers";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { doPost } from "../../Services/getPostServices";
import "./Home.css";
import { UserPost } from "../profile/components/UserPost";
import { filterByFollowing } from "./filterFunctions/FilterFollowing";
import { toast } from "react-toastify";
import { SideBar } from "../sidebar/SideBar";

export function Home()
{
    const {postState,dispatchPost} = useContext(PostContext);
    const {user,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    let displayPosts = postState?.posts;
    const token = localStorage.getItem("token");
    // displayPosts = sortFilter(displayPosts,postState?.sortType);
    displayPosts = filterByFollowing(displayPosts,user?.following,user?.username);
    displayPosts = sortFilter(displayPosts,postState?.sortType);
    displayPosts = trendingSort(displayPosts,postState?.trending);
    // const handleLogout = ()=>{
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     setUser();
    //     navigate("/login");
    // }
    const handleTrendingClick = ()=>{
        dispatchPost({type:"SET_TRENDING",payload:null});
    }
    const handleSubmitPost = (event)=>{
            event.preventDefault();
            if(postContent!=="")
            {
                doPost({content:postContent},token,dispatchPost)
                setPostContent("");
                toast.success("Posted Successfully",{
                    position: toast.POSITION.BOTTOM_RIGHT
                  })
            }
    }
    
    const [postContent, setPostContent] = useState("");
    // console.log(postContent);
    return (<div className="HomePage">
        {/* <div><SideBar /></div> */}
        <div className="homeComponent">
            
            <form onSubmit={(event)=>handleSubmitPost(event)}>
                <div className="postComp">
                
                    <div className="profileImgContainer">
                        <img className="profileImg" src={user?.profileImg} alt="profile"/>
                    </div>
                
                    <textarea value={postContent} className="postText" onChange={(event)=>setPostContent(event.target.value)} 
                    placeholder="Hey! What's happening"></textarea>
                    <div className="submitContainer">
                        <button className="postButton">Post</button>
                    </div>
                </div>
                <hr />
            </form>
            
            {/* <img src="http://surl.li/ijvfa" alt="profile"/>  */}
        {/* <p> {user?.following.length}</p> */}
        <div className="sortButtons">
                <button className="sortBy" onClick={()=>dispatchPost({type:"SET_SORT",payload:"latest"})}>latest</button>
                <button className="sortBy" onClick={()=>dispatchPost({type:"SET_SORT",payload:"oldest"})}>oldest</button>
                <button onClick={()=>handleTrendingClick()} className="sortBy">Trending</button>
            </div>

            {displayPosts?.map(postData=>
            
            
            <div className="individualPost"> 
                {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
            </div>)}
          
        </div>
        {/* <div className="Suggestions">
            <AllUsers />
        </div> */}
    </div>)
}