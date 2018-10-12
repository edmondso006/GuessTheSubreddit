import { GET_IMAGE_FROM_SUB, GET_CORRECT_SUB, GET_OPTIONS, ADD_POINT, NEXT_QUESTION } from '../actions/actions';

const initialState = {
  imageUrl: undefined,
  correctSub: undefined,
  options: [],
  score: 0,
  question: 1
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

    case NEXT_QUESTION:
      return{
        ...state,
        question: state.question + 1
      }
    
    case ADD_POINT:
      return{
        ...state,
        score: state.score + 1 
      }

    //Always have a default
    default:
      return state;  
  }
}