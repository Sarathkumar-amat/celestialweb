
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
    const [contentImg,setContentImg] = useState();
    const {user} = useContext(AuthContext);
    const {dispatchPost} = useContext(PostContext);
    const [postContent,setPostContent] = useState(postObj?.content);
    const handleContentChange = (e)=>{
        setPostContent(e.target.value);
    }
    const handleEdit = ()=>{
        doEditPost(postObj?._id,{...postObj,content:postContent,coverImg:contentImg},token,dispatchPost);
        setEdit(false);
    }
    const handleContentImage = (event)=>{
        const newSrc = event.target.files[0];
        setContentImg(URL.createObjectURL(newSrc));
        console.log(URL.createObjectURL(newSrc));
    }
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={editRef} className="EditModelContainer">
                <input id="file-upload" type="file" onChange={handleContentImage} />
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