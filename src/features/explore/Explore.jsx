import { useContext } from "react"
import { PostContext } from "../../contexts/PostProvider"
import { UserPost } from "../profile/components/UserPost";
import { PostCard } from "../home/components/PostCard";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Explore.css";
import { sortFilter, trendingSort } from "../home/filterFunctions/SortFilter";
import { SideBar } from "../sidebar/SideBar";
import { AllUsers } from "../home/Suggestions/AllUsers";

export function Explore()
{
    const {user} = useContext(AuthContext);
    const {postState,dispatchPost} = useContext(PostContext);
    let displayPosts = postState?.posts;
    displayPosts = trendingSort(displayPosts,postState?.trending);
    const handleTrendingClick = ()=>{
        dispatchPost({type:"SET_TRENDING",payload:null});
    }
    return (<div className="explorePage">
       
        
            {/* <h3>Explore page</h3> */}
            <div>
                {/* <div className="page-name"><h2>Explore</h2></div> */}
            {/* <div className="TrendingButton">Trending</div> */}
            <div className="post-container">{displayPosts?.map(postData=>
                <div className="individualPost"> 
                    {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                    {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
                </div>)}</div>
            </div>
       
    </div>)
}