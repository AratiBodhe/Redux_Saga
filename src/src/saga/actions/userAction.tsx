import { FETCH_USERS } from "../actionType"
import userWatcher from "../sagas/userSaga"


export const userAction=()=>{
    console.log("userAction")
    return{
        type:FETCH_USERS,
        payload:userWatcher()
    }
}