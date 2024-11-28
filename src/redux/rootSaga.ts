import { all } from "redux-saga/effects";
import { watchApiSaga } from "./api/auth/apiSaga";
import { watchYatchSaga } from "./api/Yatchtable/YatchSaga";


export default function* rootSaga() {
  yield all([watchApiSaga(),watchYatchSaga()]);
}
