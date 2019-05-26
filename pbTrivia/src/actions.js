export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';

export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_INCORRECT = 'ANSWER_INCORRECT';

export const fetchQuestions = () => {
  return dispatch => {
    return fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    )
      .then(res => res.json())
      .then(json => dispatch(fetchQuestionsSuccess(json.results)))
      .catch(error => {
        dispatch(fetchQuestionsError(error));
      });
  };
};

export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: { questions }
});

export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS_ERROR,
  payload: { error }
});

export const answerQuestion = (question, answer) => {
  if (answer === question.correct_answer) {
    return { type: ANSWER_CORRECT };
  } else {
    return { type: ANSWER_INCORRECT };
  }
};

export const finishTrivia = () => {
  return { type: END_GAME };
};
