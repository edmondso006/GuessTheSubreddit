import { GET_IMAGE_FROM_SUB } from '../actions/actions';
import { GET_IMAGE_FROM_SUB_FAIL } from '../actions/actions';

const initialState = {
  imageUrl: undefined
}

export default function subredditReducer(state=initialState, action) {
  switch(action.type){
    case GET_IMAGE_FROM_SUB:

      return {
        ...state,
        imageUrl: action.imageUrl,
      };

    case GET_IMAGE_FROM_SUB_FAIL:
      return{
        ...state,
        imageUrl: undefined
      }
      

    //Always have a default
    default:
      return state;  
  }
}