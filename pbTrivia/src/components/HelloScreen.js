import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { startTrivia } from '../actions';

import Results from './Results';
import ErrorMessage from './ErrorMessage';

const HelloScreen = ({ onGameStart, triviaFinished, error }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia!</Text>
      <Text style={styles.description}>
        Answer 10 questions and find out how much you know about random stuff.
      </Text>
      <Button onPress={() => onGameStart()} title='Start Game' />
      {triviaFinished && <Results />}
      {error && <ErrorMessage error={error} />}
    </View>
  );
};

HelloScreen.propTypes = {
  onGameStart: PropTypes.func.isRequired,
  triviaFinished: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    triviaFinished: state.triviaFinished,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  onGameStart: () => dispatch(startTrivia())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloScreen);

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 280,
    marginBottom: 16
  },
  results: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
