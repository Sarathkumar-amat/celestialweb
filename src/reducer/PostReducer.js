export function postReducer(state,action)
{
    switch(action.type)
    {
        case "SET_POSTS":
            return {...state,posts:action.payload};
    }
}