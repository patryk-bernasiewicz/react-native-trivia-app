import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TriviaApp from './src/TriviaApp';

const initialState = {
  triviaStarted: false
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TriviaApp />
      </Provider>
    );
  }
}
