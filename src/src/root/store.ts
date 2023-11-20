import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import userWatcher from '../saga/sagas/userSaga';
import productWatcher from "../saga/sagas/productSaga";

export const sagaMiddleware=createSagaMiddleware();


const store=configureStore({
    reducer:rootReducer,
    middleware:[sagaMiddleware]
});
  sagaMiddleware.run(productWatcher)
export default store;
