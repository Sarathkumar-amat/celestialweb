import { createContext, useEffect, useReducer } from "react"
import { postReducer } from "../reducer/PostReducer";
import axios from "axios";
import { useState } from "react";

export const PostContext = createContext();

export function PostProvider({children})
{
    const [showMenu,setShowMenu] = useState(false);
    const [postState,dispatchPost] = useReducer(postReducer,{
        posts:[],
        sortType:""
    })
    const getPostData = async()=>{
        try{
        const response = await axios.get("/api/posts");
           if(response.status===200)
           {
            console.log(response.data);
            dispatchPost({type:"SET_POSTS",payload:response.data.posts});
           }
        }
        catch(error){
            console.error(error.response.data)
        }
    }
    
    useEffect(()=>{
        getPostData()
    },[dispatchPost])
    return (<div>
        <PostContext.Provider value={{postState,dispatchPost,showMenu,setShowMenu}}>
            {children}
        </PostContext.Provider>
    </div>)

}