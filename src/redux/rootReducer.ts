import { combineReducers } from "@reduxjs/toolkit";
import yatchReducer from "./api/Yatchtable/YatchReducer";
import apiReducer from "./api/auth/apiReducer";

const rootReducer = combineReducers({
  api: apiReducer,
  yatch: yatchReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
