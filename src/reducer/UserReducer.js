export function userReducer(state,action){
    switch(action.type){
        case "SET_BOOKMARKS":
            return {...state,bookMarks:action.payload};
        case "SET_ALL_USERS":
            return {...state,allUsers:action.payload};
    }
}