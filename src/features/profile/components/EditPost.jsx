
import { useState } from "react";
import { doEditPost } from "../../../Services/getPostServices";
import "../Profile.css"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { PostContext } from "../../../contexts/PostProvider";
export function EditPost({postObj,setEdit})
{
    const token = localStorage.getItem("token");
    const {dispatchPost} = useContext(PostContext);
    const [postContent,setPostContent] = useState(postObj?.content);
    const handleContentChange = (e)=>{
        setPostContent(e.target.value);
    }
    const handleEdit = ()=>{
        doEditPost(postObj?._id,{...postObj,content:postContent},token,dispatchPost);
    }
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div className="modelContainer">
                
                Edit post
               <textarea className="content" onChange={(e)=>handleContentChange(e)}>{postObj?.content}</textarea>
               <button onClick={handleEdit}>submit</button>
                <button onClick={()=>setEdit(false)}>close</button>
            </div>
        </div>
      
    </div>)
}