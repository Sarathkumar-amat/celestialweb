import { useNavigate } from "react-router-dom"
import "./SideBar.css"

export function SideBar()
{
    const navigate = useNavigate();
    return ( <div className="sideBarOptions">
    <div onClick={()=>navigate("/")} className="feature">
      <i class="bi bi-house"></i>
      <div>Home</div>
    </div>
    <div onClick={()=>navigate("/explore")} className="feature">
      <i class="bi bi-rocket"></i>
      <div>Explore</div>
    </div>
    <div onClick={()=>navigate("/bookMarks")} className="feature">
      <i class="bi bi-bookmark-check"></i>
      <div>Bookmarks</div>
    </div>
    <div onClick={()=>navigate("/profile")} className="feature">
      <i class="bi bi-person-circle"></i>
      <div>Profile</div>
    </div>
  </div>)
}