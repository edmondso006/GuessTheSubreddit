import { GET_SUBREDDIT_BEGIN, GET_SUBREDDIT_SUCCESS, GET_SUBREDDIT_FAILURE } from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function subredditReducer(state=initialState, action) {
  switch(action.type){
    case GET_SUBREDDIT_BEGIN:
      // Set loading to true
      return {
        ...state,
        loading: true,
        error: null
      };
    
      case GET_SUBREDDIT_SUCCESS:
        //set loading to false
         return {
          ...state,
          subreddit: action.payload,
          loading: false,
        };

      case GET_SUBREDDIT_FAILURE:
        //Failed but did  stop
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };

      default:
        //Always have a default
        return state;  
  }
}