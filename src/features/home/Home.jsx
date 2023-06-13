import { useContext, useReducer } from "react"
import { PostContext } from "../../contexts/PostProvider"
import { PostCard } from "./components/PostCard";

export function Home()
{
    const {postState} = useContext(PostContext);
    return (<div>
        <h2>Latest Posts</h2>
        {postState.posts?.map(postData=>
           
        <div> <PostCard singlePost={postData}/></div>)}
    </div>)
}