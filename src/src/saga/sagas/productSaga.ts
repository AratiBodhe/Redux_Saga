import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { POST_PRODUCT } from "../actionType";
import ApiService from "../../root/rootService";
import { productService } from "../service/productService";

 function* productSaga(action:any){
    //action is a param object pass from an action
    console.log("products saga",action);
    const products:[]=yield call(productService,action.params)
    console.log("products are",products);
    yield put({type:POST_PRODUCT,payload:products})
    
}
export default function* productWatcher(){
    yield takeLatest(POST_PRODUCT,productSaga);
}
