import { POST_PRODUCT } from "../actionType";


const initialState={
    posts:[]
}
export const postReducer=(state=initialState , action:any)=>{
        switch (action.type) {
            case POST_PRODUCT:
                return{
                    state,
                    posts:[...state.posts,action.payload]
                }
            default:
               return state;
        }
}