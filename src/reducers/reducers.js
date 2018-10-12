import { GET_IMAGE_FROM_SUB, GET_CORRECT_SUB, GET_OPTIONS } from '../actions/actions';

const initialState = {
  imageUrl: undefined,
  correctSub: undefined,
  options: []
}

export default function subredditReducer(state=initialState, action) {
  switch(action.type){
    case GET_IMAGE_FROM_SUB:
      return {
        ...state,
        imageUrl: action.imageUrl,
      };

    case GET_CORRECT_SUB:
      return{
        ...state,
        correctSub: action.correctSub
      };

    case GET_OPTIONS:
      return{
        ...state,
        options: action.options
      }

    //Always have a default
    default:
      return state;  
  }
}