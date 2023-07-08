import { useNavigate } from "react-router-dom"
import "./SideBar.css"
import { NavLink,Link } from "react-router-dom";

export function SideBar()
{
    const navigate = useNavigate();
    const linkStyle = ({isActive})=>({
      backgroundColor: isActive&&"white",
      borderRight:isActive?"2px solid black":"none"
    })
    return ( <div className="sideBarOptions">
      
      <div className="sidebar-content">
      <div className="Apptitle">CelestialWeb</div>
      <div>
      <NavLink style={linkStyle} to="/" className="feature">
        <i class="bi bi-house"></i>
        <div>Home</div>
      </NavLink>
      <NavLink style={linkStyle} to="/explore" className="feature">
        <i class="bi bi-rocket"></i>
        <div>Explore</div>
      </NavLink>
      <NavLink style={linkStyle} to="/bookMarks" className="feature">
        <i class="bi bi-bookmark-check"></i>
        <div>Bookmarks</div>
      </NavLink>
      <NavLink style={linkStyle} to="/profile" className="feature">
        <i class="bi bi-person-circle"></i>
        <div>Profile</div>
      </NavLink>
    </div>
    </div>
  </div>)
}