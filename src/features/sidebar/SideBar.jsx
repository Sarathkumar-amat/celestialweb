import "./SideBar.css"

export function SideBar()
{
    return ( <div className="sideBarOptions">
    <div className="feature">
      <i class="bi bi-house"></i>
      <div>Home</div>
    </div>
    <div className="feature">
      <i class="bi bi-rocket"></i>
      <div>Explore</div>
    </div>
    <div className="feature">
      <i class="bi bi-bookmark-check"></i>
      <div>Bookmarks</div>
    </div>
    <div className="feature">
      <i class="bi bi-person-circle"></i>
      <div>Profile</div>
    </div>
  </div>)
}