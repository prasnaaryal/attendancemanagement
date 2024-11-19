import {

  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  ApiActionTypes,
} from "./apiTypes";

const initialState: any = {
  loading: false,
  data: null,
  error: null,
};

const apiReducer = (state = initialState, action: ApiActionTypes): any => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case POST_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case POST_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default apiReducer;
