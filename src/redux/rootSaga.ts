import { all } from "redux-saga/effects";
import { watchApiSaga } from "./api/apiSaga";


export default function* rootSaga() {
  yield all([watchApiSaga()]);
}
