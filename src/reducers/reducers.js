import { START_GAME, GET_IMAGE_FROM_SUB, GET_CORRECT_SUB, GET_OPTIONS, ADD_POINT, NEXT_QUESTION, GAME_OVER} from '../actions/actions';

const initialState = {
  startGame: false,
  imageUrl: undefined,
  correctSub: undefined,
  options: [],
  score: 0,
  question: 1,
  gameOver: false
}

export default function subredditReducer(state=initialState, action) {
  switch(action.type){

    case START_GAME:
      return{
        ...state,
        startGame: true
      }


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

    case GAME_OVER:
      return{
        ...state,
        gameOver: true
      }

    //Always have a default
    default:
      return state;  
  }
}