
import { useContext } from "react";
import "./FollowingList.css";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { doUnfollow } from "../../../Services/UserServices";
export function FollowingList({setFollowing,currRef})
{

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const {user,setUser} = useContext(AuthContext);
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={currRef} className="FollowerModelContainer">
                
                {user?.following.length<=0 ? <h3>No following yet</h3> :
                    <div>{user?.following?.map(({_id,firstName,lastName,username,profileImg})=>
                    <div className="following-box">
                            <div onClick={()=>navigate(`/userProfile/${username}`)} className="userPart">
                                <div className="usersPicContainer"><img src={profileImg} /></div>
                                <div className="userRoute">
                                    <div>{firstName} {lastName}</div>
                                    <div>@{username}</div>
                                </div>
                               
                            </div>
                            <div>
                                <div onClick={()=>doUnfollow(_id,token,setUser)} className="unfollow-button">Unfollow</div>
                            </div>
                            {/* <hr /> */}
                    </div>
                    )}</div>
                }
            </div>

        </div>

    </div>)
}