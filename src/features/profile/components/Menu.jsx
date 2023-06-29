import { useContext, useState } from "react"
import { EditPost } from "./EditPost"
import "./UserPost.css"
import { doDeletePost } from "../../../Services/getPostServices";
import { PostContext } from "../../../contexts/PostProvider";

export function Menu({postObj,refr,setMenu,setEdit})
{
    const token = localStorage.getItem("token");
    const {dispatchPost} = useContext(PostContext);
    
    const handleEdit = (e)=>{
        setMenu(false);
        e.stopPropagation();
        setEdit(true);
    }
    
    return (<div ref={refr} className="menuContainer">
        <div onClick={(e)=>handleEdit(e)}>Edit</div>
        <div onClick={()=>doDeletePost(postObj?._id,token,dispatchPost)}>Delete</div>
       
    </div>)
}