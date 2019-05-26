import { START_GAME, END_GAME } from './actions';

const initialState = {
  triviaStarted: false,
  questions: []
};

const reducer = (state = initialState, action) => {
  console.log('Action: ', action);
  switch (action.type) {
    case START_GAME:
      console.log('Start game');
      return { ...state, triviaStarted: true };
    case END_GAME:
      return { ...state, triviaStarted: false };
    default:
      return state;
  }
};

export default reducer;
