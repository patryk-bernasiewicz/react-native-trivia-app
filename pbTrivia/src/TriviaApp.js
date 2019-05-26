import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
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
    currentQuestion: null,
    error: null
  };

  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        ...this.state,
        triviaStarted: store.getState().triviaStarted
      });
    });
  }

  render() {
    const { triviaStarted, error } = this.state;
    let screen;

    if (triviaStarted && !error) {
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

const mapStateToProps = state => {
  return {
    triviaStarted: state.triviaStarted,
    currentQuestion: state.currentQuestion,
    error: state.error
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
