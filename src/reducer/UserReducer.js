export function userReducer(state,action){
    switch(action.type){
        case "SET_BOOKMARKS":
            return {...state,bookMarks:action.payload};
    }
}