import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export function NavBar()
{
    const navigate = useNavigate();
    const {user,setUser} = useContext(AuthContext);
    return (<div className="navigationBar">
        <div className="titleText">Celestial Web</div>
        <div onClick={()=>navigate("/profile")} className="userImageContainer">
            <img className="profileImg" src={user?.profileImg} alt="profile"/>
        </div>
    </div>)
}