import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { startTrivia } from '../actions';

import ErrorMessage from './ErrorMessage';

const HelloScreen = ({ onGameStart, triviaFinished, error }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome to the Trivia Challenge!</Text>
      <Text style={styles.description}>
        You will be presented with 10 True or False questions.
      </Text>
      <Text style={styles.description}>Can you score 100%?</Text>
      {error && <ErrorMessage error={error} />}
      <Button onPress={() => onGameStart()} title='BEGIN' />
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
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 250,
    marginBottom: 16
  },
  results: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
