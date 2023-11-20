import { FETCH_USERS } from "../actionType";


const initialState={
    users:[]
}
export const userReducer=(state=initialState , action:any)=>{
        switch (action.type) {
            case FETCH_USERS:
                return{
                    state,
                    users:action.payload
                }
            default:
               return state;
        }
}