import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../Profile.css"
import { useState } from "react";
import { doEdit } from "../../../Services/UserServices";
export function EditProfile({closeModal,editRef})
{
    const {user,setUser} = useContext(AuthContext);
    const [avatar,setAvatar] = useState(user?.profileImg);
    const [newBio,setBio] = useState(user?.bio);
    const token = localStorage.getItem("token");
    
    console.log(avatar);
    const handleUpdate=()=>{
        doEdit({...user,bio:newBio,profileImg:avatar},token,setUser);
    }
    // const handleProfilePic = (event)=>{
    //     const newSrc = window.URL.createObjectURL(event.target.files[0]);
        
    //     setAvatar(newSrc);
    // }
    console.log(user);
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={editRef} className="modelContainer">
                <div className="profileImgContainer">
                    <img src={user?.profileImg} className="profileImg" alt="profilePic" />
                </div>
            
                {/* <label htmlFor="editAvatar">Edit Profile Image</label>
                <input onChange={(event)=>handleProfilePic(event)}type="file" accept="image/jpeg, image/png, image/jpg" id="editAvatar"/> */}
                <input onChange={(event)=>setBio(event.target.value)}type="text" defaultValue={user?.bio}/>
                <button onClick={()=>closeModal(false)}>Close</button>
                <button onClick={()=>handleUpdate()}>Update</button>
            </div>
        </div>
    </div>)
}