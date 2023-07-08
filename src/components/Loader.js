import loadingImg from "./loading-loading-screen-new.gif"
import "./Loader.css"
export function Loader()
{
    return (<div className="loader-dimension flex-center">
    <img src={loadingImg} alt="loadingGif"/>
    </div>)
}