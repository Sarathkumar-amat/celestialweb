import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../Profile.css"
import "./EditProfile.css"
import { useState } from "react";
import { doEdit } from "../../../Services/UserServices";
export function EditProfile({closeModal,editRef})
{
    const {user,setUser} = useContext(AuthContext);
    // const [avatar,setAvatar] = useState(user?.profileImg);
    const [newBio,setBio] = useState(user?.bio);
    const [newImg,setImg] = useState(user?.profileImg);
    const [newWebsite,setWebsite] = useState(user?.website);
    const token = localStorage.getItem("token");
    
    const handleUpdate=()=>{
        doEdit({...user,bio:newBio,profileImg:newImg,website:newWebsite},token,setUser);
        closeModal(false);
    }
    const handleImageUpload = (event)=>{
    const newSrc = event.target.files[0];
        
     setImg(URL.createObjectURL(newSrc));
    }

    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={editRef} className="modelContainer">
                <div className="editForm">
                <input id="file-upload" type="file" onChange={handleImageUpload} />
                <div className="Bio">
                    <label>Bio</label>
                    <input onChange={(event)=>setBio(event.target.value)}type="text" defaultValue={user?.bio}/>
                </div>
                <div className="profileImg">
                    <label>Profile Image Link</label>
                    <input onChange={(event)=>setImg(event.target.value)}type="text" defaultValue={user?.profileImg}/>
                </div>
                <div className="websiteLink">
                    <label>Website</label>
                    <input onChange={(event)=>setWebsite(event.target.value)}type="text" defaultValue={user?.website}/>
                </div>
                <button onClick={()=>closeModal(false)}>Close</button>
                <button onClick={()=>handleUpdate()}>Update</button>
            </div>
        </div>
        </div>
    </div>)
}