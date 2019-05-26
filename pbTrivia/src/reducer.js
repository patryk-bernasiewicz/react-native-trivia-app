import {
  START_GAME,
  END_GAME,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  ANSWER_CORRECT,
  ANSWER_INCORRECT
} from './actions';

const initialState = {
  loading: false,
  triviaStarted: false,
  triviaFinished: false,
  currentQuestion: null,
  questions: [],
  correctAnswers: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        loading: true,
        triviaStarted: true,
        triviaFinished: false,
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
        correctAnswers: state.correctAnswers + 1,
        currentQuestion: state.currentQuestion + 1
      };
    case ANSWER_INCORRECT:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    default:
      return state;
  }
};

export default reducer;
