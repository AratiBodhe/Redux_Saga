import { POST_PRODUCT } from "../actionType"
import productWatcher from "../sagas/productSaga"

export const productAction = (params) => {
    console.log("payload params in action", params);
    return {
        type: POST_PRODUCT,
        payload: productWatcher(),
        params: params
    }
}