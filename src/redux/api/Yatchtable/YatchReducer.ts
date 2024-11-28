import {
    
    YATCH_DATA_REQUEST,
    YATCH_DATA_SUCCESS,
    YATCH_DATA_FAILURE,
    YatchActionTypes,
  } from "./YatchTypes";
  
  const initialState: any = {
    loading: false,
    data: null,
    error: null,
  };
  
  const yatchReducer = (state = initialState, action: YatchActionTypes): any => {
    switch (action.type) {
      case YATCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
  
  
      case YATCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
  
      
      case YATCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      
  
      default:
        return state;
    }
  };
  
  export default yatchReducer;
  