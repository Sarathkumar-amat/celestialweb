
import { useState } from "react";
import { doEditPost } from "../../../Services/getPostServices";
// import "../Profile.css"
import "./EditPost.css"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { PostContext } from "../../../contexts/PostProvider";
import { toast } from "react-toastify";
export function EditPost({postObj,setEdit})
{
    const token = localStorage.getItem("token");
    const [contentImg,setContentImg] = useState(postObj?.coverImg);
    const {user} = useContext(AuthContext);
    const {dispatchPost} = useContext(PostContext);
    const [postContent,setPostContent] = useState(postObj?.content);
    const handleContentChange = (e)=>{
        setPostContent(e.target.value);
    }
    const handleEdit = ()=>{
        doEditPost(postObj?._id,{...postObj,content:postContent,coverImg:contentImg},token,dispatchPost);
        setEdit(false);
        toast.success("Post Edited Successfully",{
            position: toast.POSITION.BOTTOM_RIGHT
          })
    }
    const handleContentImage = (event)=>{
        const newSrc = event.target.files[0];
        setContentImg(URL.createObjectURL(newSrc));
        console.log(URL.createObjectURL(newSrc));
    }
    const handleRemoveImage = (e)=>{
        e.preventDefault();
        setContentImg(null);
    }
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div className="EditModelContainer">
               
                <h3>Edit post</h3>
                <div className="contentArea">
                <textarea className="content" onChange={(e)=>handleContentChange(e)}>
                        {postObj?.content}
                </textarea>
                </div>
                <div className="img-upload-container">
                    <label htmlFor="img-file-upload">
                        <i class="bi bi-card-image"></i>
                        Image to add
                    </label>
                    <input id="img-file-upload" type="file" onChange={handleContentImage} />
                    {contentImg && <div className="added-Image">
                        <img className="content-image" src={contentImg} alt="contentImage" />
                        <button onClick={(event)=>handleRemoveImage(event)}>-</button>
                    </div>}
                </div>
                <div className="updateAndClose">
                    <div className="updateButton" onClick={handleEdit}>Update</div>
                    <button onClick={()=>setEdit(false)}>close</button>
                </div>
            </div>
        </div>
      
    </div>)
}