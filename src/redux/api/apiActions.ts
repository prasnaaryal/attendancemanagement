import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  ApiActionTypes,
} from "./apiTypes";

export const postDataRequest = (data: any): ApiActionTypes => ({
  type: POST_DATA_REQUEST,
  payload: data,
});

export const postDataSuccess = (response: any): ApiActionTypes => ({
  type: POST_DATA_SUCCESS,
  payload: response,
});

export const postDataFailure = (error: string): ApiActionTypes => ({
  type: POST_DATA_FAILURE,
  payload: error,
});
