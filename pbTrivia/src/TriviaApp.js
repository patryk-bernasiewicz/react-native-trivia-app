import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import HelloScreen from './components/HelloScreen';
import reducer from './reducer';

const store = createStore(reducer);

class TriviaApp extends Component {
  state = {
    triviaStarted: false
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
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {!this.state.triviaStarted && <HelloScreen />}
          {this.state.triviaStarted && <Text>Trivia started!</Text>}
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    triviaStarted: state.triviaStarted
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
