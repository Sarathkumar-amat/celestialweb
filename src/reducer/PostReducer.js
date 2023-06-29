import { act } from "react-dom/test-utils";

export function postReducer(state,action)
{
    switch(action.type)
    {
        case "SET_POSTS":
            return {...state,posts:action.payload};
        case "SET_SORT":
            return {...state,sortType:action.payload}
        case "ADD_POST":
            return {...state,posts:action.payload};
        case "DELETE_POST":
            return {...state,posts:action.payload};
        case "EDIT_POST":
            return {...state,posts:action.payload};
       
    }
}