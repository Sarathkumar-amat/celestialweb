import { useContext } from "react";
import { AllUsers } from "../features/home/Suggestions/AllUsers";
import { SideBar } from "../features/sidebar/SideBar";
import "./ContentBox.css";
import { Loader } from "./Loader";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export function ContentBox({children})
{
    const {loader,setLoader} = useContext(AuthContext);
    const navigate = useNavigate();
    return (<div className="page-section">
       {loader && <Loader /> }
       <div className="side-bar"> <SideBar/></div>
        {children}
        <div className="user-list-container">
        <AllUsers />
        </div>
        <div className="bottom-nav-bar">
            <div className="icon-container">
                <div onClick={()=>navigate("/")}><i class="fa-solid fa-house"></i></div>
                <div onClick={()=>navigate("/explore")}><i class="fa-solid fa-compass"></i></div>
                <div onClick={()=>navigate("/bookMarks")}><i class="fa-regular fa-bookmark"></i></div>
                <div onClick={()=>navigate("/profile")}><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
        </div>)
}