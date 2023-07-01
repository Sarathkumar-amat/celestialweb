
import { useState } from "react";
import { doEditPost } from "../../../Services/getPostServices";
// import "../Profile.css"
import "./EditPost.css"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { PostContext } from "../../../contexts/PostProvider";
export function EditPost({postObj,setEdit,editRef})
{
    const token = localStorage.getItem("token");
    const {user} = useContext(AuthContext);
    const {dispatchPost} = useContext(PostContext);
    const [postContent,setPostContent] = useState(postObj?.content);
    const handleContentChange = (e)=>{
        setPostContent(e.target.value);
    }
    const handleEdit = ()=>{
        doEditPost(postObj?._id,{...postObj,content:postContent},token,dispatchPost);
        setEdit(false);
    }
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={editRef} className="EditModelContainer">
                <h3>Edit post</h3>
                <div className="contentArea">
                <textarea className="content" onChange={(e)=>handleContentChange(e)}>
                        {postObj?.content}
                </textarea>
                </div>
                <div className="updateAndClose">
                    <div className="updateButton" onClick={handleEdit}>Update</div>
                    <button onClick={()=>setEdit(false)}>close</button>
                </div>
            </div>
        </div>
      
    </div>)
}