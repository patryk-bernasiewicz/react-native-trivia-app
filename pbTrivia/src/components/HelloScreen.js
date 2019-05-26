import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { startTrivia } from '../actions';

import Results from './Results';

const HelloScreen = ({ onGameStart, triviaFinished }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia!</Text>
      <Button onPress={() => onGameStart()} title='Start Game' />
      {triviaFinished && <Results />}
    </View>
  );
};

HelloScreen.propTypes = {
  onGameStart: PropTypes.func.isRequired,
  triviaFinished: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    triviaFinished: state.triviaFinished
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
    fontSize: 20,
    fontWeight: 'bold'
  },
  results: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
