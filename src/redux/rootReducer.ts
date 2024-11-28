import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./api/apiReducer";

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
