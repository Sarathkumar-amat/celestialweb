import { act } from "react-dom/test-utils";

export function postReducer(state,action)
{
    switch(action.type)
    {
        case "SET_POSTS":
            return {...state,posts:action.payload};
        case "SET_SORT":
            return {...state,sortType:action.payload}
       
    }
}