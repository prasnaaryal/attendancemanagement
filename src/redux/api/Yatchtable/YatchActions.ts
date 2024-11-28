import {
    YATCH_DATA_REQUEST,
    YATCH_DATA_SUCCESS,
    YATCH_DATA_FAILURE,
    YatchActionTypes,
  } from "./YatchTypes";
  
  export const yatchDataRequest = (data: any): YatchActionTypes => ({
    type: YATCH_DATA_REQUEST,
    payload: data,
  });
  
  export const yatchDataSuccess = (response: any): YatchActionTypes => ({
    type: YATCH_DATA_SUCCESS,
    payload: response,
  });
  
  export const yatchDataFailure = (error: string): YatchActionTypes => ({
    type: YATCH_DATA_FAILURE,
    payload: error,
  });
  