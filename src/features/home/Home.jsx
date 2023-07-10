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
    const [postContent, setPostContent] = useState("");
    const [newContentImg,setNewContentImg] = useState();
    // displayPosts = sortFilter(displayPosts,postState?.sortType);
    displayPosts = filterByFollowing(displayPosts,user?.following,user?.username);
    displayPosts = sortFilter(displayPosts,postState?.sortType);
    // displayPosts = trendingSort(displayPosts,postState?.trending);
    // const handleLogout = ()=>{
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     setUser();
    //     navigate("/login");
    // }
    const filterStyles = (type)=>{
        return ({backgroundColor: postState?.sortType===type?"#1976d2":"white",
        color: postState?.sortType===type?"white":"black",
        border:postState?.sortType===type?"none":"1px solid black"
    })
        
    }
    const handleTrendingClick = ()=>{
        dispatchPost({type:"SET_SORT",payload:"trending"});
    }
    const handleSubmitPost = (event)=>{
            event.preventDefault();
            if(postContent!=="")
            {
                doPost({content:postContent,coverImg:newContentImg},token,dispatchPost)
                setPostContent("");
                setNewContentImg(null);
                toast.success("Posted Successfully",{
                    position: toast.POSITION.BOTTOM_RIGHT
                  })
            }
    }
    
   
    // console.log(postContent);
    const handleAddContentImage = (event)=>{
        const newSrc = event.target.files[0];
        setNewContentImg(URL.createObjectURL(newSrc));
        console.log(URL.createObjectURL(newSrc));
    }
    const handleRemoveContentImage = (e)=>{
        e.preventDefault();
        setNewContentImg(null);
    }
    return (<div className="HomePage">
        {/* <div><SideBar /></div> */}
        <div className="homeComponent">
            
            <form onSubmit={(event)=>handleSubmitPost(event)}>
                <div className="postComp">
                
                    <div className="my-img-container">
                        <img className="profileImg" src={user?.profileImg} alt="profile"/>
                    </div>
                    <div className="image-text">
                        <textarea value={postContent} className="postText" onChange={(event)=>setPostContent(event.target.value)} 
                        placeholder="Hey! What's happening"></textarea>
                        <div className="new-img-upload-container">
                            <label htmlFor="new-img-file-upload">
                                <i class="bi bi-card-image"></i>
                                Image to add
                            </label>
                            <input id="new-img-file-upload" type="file" onChange={handleAddContentImage} />
                            {newContentImg && <div className="added-Image">
                            <img className="content-image" src={newContentImg} alt="contentImage" />
                            <button onClick={(event)=>handleRemoveContentImage(event)}>-</button>
                    </div>}
                        </div>
                    </div>
                    <div className="submitContainer">
                        <button className="postButton">Post</button>
                    </div>
                </div>
                <hr />
            </form>
            
            {/* <img src="http://surl.li/ijvfa" alt="profile"/>  */}
        {/* <p> {user?.following.length}</p> */}
        <div className="sortButtons">
                <button style={filterStyles("latest")} className="sortBy" onClick={()=>dispatchPost({type:"SET_SORT",payload:"latest"})}>Latest</button>
                <button style={filterStyles("oldest")} className="sortBy" onClick={()=>dispatchPost({type:"SET_SORT",payload:"oldest"})}>Oldest</button>
                <button style={filterStyles("trending")} onClick={()=>handleTrendingClick()} className="sortBy">Trending</button>
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