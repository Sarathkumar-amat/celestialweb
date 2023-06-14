import { useContext, useReducer } from "react"
import { PostContext } from "../../contexts/PostProvider"
import { PostCard } from "./components/PostCard";
import { sortFilter } from "./filterFunctions/SortFilter";

export function Home()
{
    const {postState,dispatchPost} = useContext(PostContext);
    let displayPosts = postState?.posts;
    displayPosts = sortFilter(displayPosts,postState?.sortType);
    return (<div>
        <h2>Latest Posts</h2>
        {(postState?.sortType==="oldest" || postState?.sortType==="") && 
        <button onClick={()=>dispatchPost({type:"SET_SORT",payload:"latest"})}>latest</button>}
        {postState?.sortType==="latest" && 
        <button onClick={()=>dispatchPost({type:"SET_SORT",payload:"oldest"})}>oldest</button>}
        {displayPosts?.map(postData=>
           
        <div> <PostCard singlePost={postData}/></div>)}
    </div>)
}