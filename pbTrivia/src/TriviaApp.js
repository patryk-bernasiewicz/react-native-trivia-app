import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import HelloScreen from './components/HelloScreen';
import TriviaScreen from './components/TriviaScreen';
import ResultsScreen from './components/ResultsScreen';

const store = createStore(reducer, applyMiddleware(thunk));

class TriviaApp extends Component {
  state = {
    triviaStarted: false,
    triviaFinished: false,
    currentQuestion: null,
    error: null
  };

  constructor(props) {
    super(props);
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        ...this.state,
        triviaStarted: state.triviaStarted,
        triviaFinished: state.triviaFinished
      });
    });
  }

  render() {
    const { triviaStarted, triviaFinished, error } = this.state;
    let screen;

    if (triviaFinished) {
      screen = <ResultsScreen />;
    } else if (!error && triviaStarted) {
      screen = <TriviaScreen />;
    } else {
      screen = <HelloScreen />;
    }

    return (
      <Provider store={store}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          imageStyle={{ resizeMode: 'cover' }}
          style={styles.backgroundContainer}
        >
          {screen}
        </ImageBackground>
      </Provider>
    );
  }
}

export default TriviaApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
