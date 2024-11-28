import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../config/axios";
import {
 
  yatchDataRequest,
  yatchDataSuccess,
  yatchDataFailure,
 
} from "./YatchActions";

function getDataToYatch(data: any) {
  return axios.get("/api/es/all_yachts", data);
}


function* yatchDataSaga(action: any): Generator {
  try {
    const response: any = yield call(getDataToYatch, action.payload);
    yield put(yatchDataSuccess(response.data));
  } catch (error: any) {
    yield put(yatchDataFailure(error.message));
  }
}

export function* watchYatchSaga() {
  yield takeEvery(yatchDataRequest, yatchDataSaga);
}


