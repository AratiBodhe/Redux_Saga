import { call, put, takeLatest } from 'redux-saga/effects'
import { userService } from '../service/userService'
import { FETCH_USERS } from '../actionType';

function* userSaga() {
    try {
        const result = yield call(userService);
        // console.log("hii========", result.data);
        yield put({ type: FETCH_USERS, payload: result.data})
    } catch (err) {
        // console.log('err----', err);
    }
}

export default function* userWatcher() {
    yield takeLatest(FETCH_USERS, userSaga)
}