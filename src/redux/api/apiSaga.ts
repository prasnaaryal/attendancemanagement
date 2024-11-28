import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../config/axios";
import {
 
  postDataRequest,
  postDataSuccess,
  postDataFailure,
  loginDataRequest,
  loginDataSuccess,
  loginDataFailure
} from "./apiActions";



function postDataToApi(data: any) {
  return axios.post("/auth/create-account/", data);
}
function loginDataToApi(data: any) {
  return axios.post("/auth/login/", data);
}





function* postDataSaga(action: any): Generator {
  try {
    const response: any = yield call(postDataToApi, action.payload);
    yield put(postDataSuccess(response.data));
  } catch (error: any) {
    yield put(postDataFailure(error.message));
  }
}


function* loginDataSaga(action: any): Generator {
  try {
    const response: any = yield call(loginDataToApi, action.payload);
    yield put(loginDataSuccess(response.data));
  } catch (error: any) {
    yield put(loginDataFailure(error.message));
  }
}

export function* watchApiSaga() {
  yield takeEvery(postDataRequest, postDataSaga);
  yield takeEvery(loginDataRequest, loginDataSaga);
}


