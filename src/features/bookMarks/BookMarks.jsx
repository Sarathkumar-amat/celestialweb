import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { UserContext } from "../../contexts/UserProvider";
import { UserPost } from "../profile/components/UserPost";
import { PostCard } from "../home/components/PostCard";

export function BookMarks()
{
    const {user} = useContext(AuthContext);
    const {userState} = useContext(UserContext);
    const displayPosts = userState?.bookMarks;
    console.log(user);

    return (<div>
        <h3>BookMarks page</h3>
        {displayPosts?.length<=0 && <div>
            <h2>No Bookmarks yet</h2>
        </div>}
        {displayPosts?.map(postData=>
            <div className="individualPost"> 
                {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
            </div>)}
    </div>)
}