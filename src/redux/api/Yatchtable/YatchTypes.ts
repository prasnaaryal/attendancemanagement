export const YATCH_DATA_REQUEST = "YATCH_DATA_REQUEST";
export const YATCH_DATA_SUCCESS = "YATCH_DATA_SUCCESS";
export const YATCH_DATA_FAILURE = "YATCH_DATA_FAILURE";


interface YatchDataRequest {
  type: typeof YATCH_DATA_REQUEST;
  payload: any; // Data being sent to the API
}

interface YatchDataSuccess {
  type: typeof YATCH_DATA_SUCCESS;
  payload: any; // Data returned from the API
}

interface YatchDataFailure {
  type: typeof YATCH_DATA_FAILURE;
  payload: string; // Error message
}


export type YatchActionTypes =
 
  | YatchDataRequest
  | YatchDataSuccess
  | YatchDataFailure;

