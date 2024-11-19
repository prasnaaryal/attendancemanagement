import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../config/axios";
import {
 
  postDataRequest,
  postDataSuccess,
  postDataFailure,
} from "./apiActions";



function postDataToApi(data: any) {
  return axios.post("/auth/create-account/", data);
}



function* postDataSaga(action: any): Generator {
  try {
    const response: any = yield call(postDataToApi, action.payload);
    yield put(postDataSuccess(response.data));
  } catch (error: any) {
    yield put(postDataFailure(error.message));
  }
}

export function* watchApiSaga() {
  yield takeEvery(postDataRequest, postDataSaga);
}
