import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { UserContext } from "../../contexts/UserProvider";
import { UserPost } from "../profile/components/UserPost";
import { PostCard } from "../home/components/PostCard";
// import { SideBar } from "../sidebar/SideBar";
import "./BookMarks.css";
// import { AllUsers } from "../home/Suggestions/AllUsers";

export function BookMarks()
{
    const {user} = useContext(AuthContext);
    const {userState} = useContext(UserContext);
    const displayPosts = userState?.bookMarks;

    return (<div className="BookMarksPage">
       
       
            {/* <h3>BookMarks page</h3> */}
            <div className="bookmarks-container">
                
            {displayPosts?.length<=0 && <div className="no-bookmark-msg">
                <h2>No bookmarks yet</h2>
            </div>}
            {displayPosts?.length>0 && 
            <div>
                <h2>Bookmarks</h2>
                {displayPosts?.map(postData=>
                    <div className="individualPost"> 
                        {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                        {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
                    </div>)}
            </div>
            }
                </div>
        
    </div>)
}