
import { useContext } from "react";
import "./FollowingAll.css";
// import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
export function FollowersAll({userObj,setFollowing,currRef})
{

    const navigate = useNavigate();
    // const {user} = useContext(AuthContext);
    return (<div className="overLayModal">
        <div className="modelBackground">
            <div ref={currRef} className="FollowingModelContainer">
                
                {userObj?.followers?.length<=0 ? <h3>No followers yet</h3> :
                    <div>{userObj?.followers?.map(({firstName,lastName,username,profileImg})=>
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