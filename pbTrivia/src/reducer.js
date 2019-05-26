import {
  START_GAME,
  END_GAME,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  ANSWER_CORRECT,
  ANSWER_INCORRECT,
  RESET
} from './actions';

const initialState = {
  loading: false,
  triviaStarted: false,
  triviaFinished: false,
  currentQuestion: null,
  questions: [],
  answers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        loading: true,
        triviaStarted: true,
        triviaFinished: false,
        answers: [],
        error: null
      };
    case END_GAME:
      return {
        ...state,
        loading: false,
        triviaStarted: false,
        triviaFinished: true,
        currentQuestion: null,
        error: null
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        triviaStarted: false,
        error: action.payload.error
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentQuestion: 0,
        questions: action.payload.questions
      };
    case ANSWER_CORRECT:
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            question: action.payload.question,
            answer: action.payload.answer,
            valid: true
          }
        ],
        currentQuestion: state.currentQuestion + 1
      };
    case ANSWER_INCORRECT:
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            question: action.payload.question,
            answer: action.payload.answer,
            valid: false
          }
        ],
        currentQuestion: state.currentQuestion + 1
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
