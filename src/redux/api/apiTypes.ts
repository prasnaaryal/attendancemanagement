export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

interface PostDataRequest {
  type: typeof POST_DATA_REQUEST;
  payload: any; // Data being sent to the API
}

interface PostDataSuccess {
  type: typeof POST_DATA_SUCCESS;
  payload: any; // Data returned from the API
}

interface PostDataFailure {
  type: typeof POST_DATA_FAILURE;
  payload: string; // Error message
}

export type ApiActionTypes =
  |
  | PostDataRequest
  | PostDataSuccess
  | PostDataFailure;
