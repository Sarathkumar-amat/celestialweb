import { useContext, useReducer } from "react"
import { PostContext } from "../../contexts/PostProvider"

export function Home()
{
    const {postState} = useContext(PostContext);
    return (<div>
        <h2>Latest Posts</h2>
        {postState.posts?.map(({content})=>
        
        <div>{content}</div>)}
    </div>)
}