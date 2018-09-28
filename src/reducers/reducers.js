import { GET_IMAGE_FROM_SUB } from '../actions/actions';

const initialState = {
  imageUrl: ''
}

export default function subredditReducer(state=initialState, action) {
  switch(action.type){
    case GET_IMAGE_FROM_SUB:

      return {
        ...state,
        imageUrl: action.imageUrl,
      };

    //Always have a default
    default:
      return state;  
  }
}