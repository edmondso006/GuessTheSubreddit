import { GET_IMAGE_FROM_SUB, GET_CORRECT_SUB } from '../actions/actions';

const initialState = {
  imageUrl: undefined,
  correctSub: undefined,
  incorrectSubs: []
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
      } 

    //Always have a default
    default:
      return state;  
  }
}