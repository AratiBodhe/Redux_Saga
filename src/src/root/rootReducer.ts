import { combineReducers } from "redux";
import { userReducer } from "../saga/reducers/userReducer";
import { postReducer } from "../saga/reducers/productReducer";
 const rootReducer=combineReducers({
    user:userReducer,
    post:postReducer
});
export default rootReducer;