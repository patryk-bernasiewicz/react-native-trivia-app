import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import HelloScreen from './components/HelloScreen';
import TriviaScreen from './components/TriviaScreen';

const store = createStore(reducer, applyMiddleware(thunk));

class TriviaApp extends Component {
  state = {
    triviaStarted: false,
    currentQuestion: null
  };

  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        triviaStarted: store.getState().triviaStarted
      });
    });
  }

  render() {
    const { triviaStarted } = this.state;
    let screen;

    if (triviaStarted) {
      screen = <TriviaScreen />;
    } else {
      screen = <HelloScreen />;
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>{screen}</View>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    triviaStarted: state.triviaStarted,
    currentQuestion: state.currentQuestion,
    correctAnswers: state.correctAnswers
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
