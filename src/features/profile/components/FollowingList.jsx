
import { useContext } from "react";
import "../Profile.css";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
export function FollowingList({setFollowing,currRef})
{

    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log("followingmodel");
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={currRef} className="FollowerModelContainer">
                
                {user?.following.length<=0 ? <h1>No followers yet</h1> :
                    <div>{user?.following?.map(({firstName,lastName,username,profileImg})=>
                    <div onClick={()=>navigate(`/userProfile/${username}`)}>
                            <div className="userPart">
                                <div className="userPicContainer"><img src={profileImg} /></div>
                                <div className="userRoute">
                                    <div>{firstName} {lastName}</div>
                                    <div>@{username}</div>
                                    
                                </div>
                            </div>
                            <hr />
                    </div>
                    )}</div>
                }
            </div>

        </div>

    </div>)
}