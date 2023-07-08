import { Navigate,useLocation } from "react-router-dom";

export default function RequiresAuth({children})
{
    const token = localStorage.getItem("token");
    const location = useLocation();
    return (<div>{token?children:<Navigate to="/login" state={{from:location}}/>}</div>)
}