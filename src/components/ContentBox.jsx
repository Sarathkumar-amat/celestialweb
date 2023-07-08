import { useContext } from "react";
import { AllUsers } from "../features/home/Suggestions/AllUsers";
import { SideBar } from "../features/sidebar/SideBar";
import "./ContentBox.css";
import { Loader } from "./Loader";
import { AuthContext } from "../contexts/AuthProvider";

export function ContentBox({children})
{
    const {loader,setLoader} = useContext(AuthContext);
    return (<div className="page-section">
       {loader && <Loader /> }
       <div className="side-bar"> <SideBar/></div>
        {children}
        <div className="user-list-container">
        <AllUsers />
        </div>
        </div>)
}