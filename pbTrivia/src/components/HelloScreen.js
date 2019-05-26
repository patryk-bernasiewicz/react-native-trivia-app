import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { START_GAME, END_GAME } from '../actions';

const HelloScreen = ({ onGameStart, triviaFinished, correctAnswers }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia!</Text>
      <Button onPress={() => onGameStart()} title='Start Game' />
      {triviaFinished && correctAnswers && (
        <View style={styles.results}>
          <Text>{correctAnswers > 4 ? 'Congratulations!' : 'Sorry...'}</Text>
          <Text>
            You answered correctly {correctAnswers} out of 10 questions.
          </Text>
        </View>
      )}
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
    correctAnswers: state.correctAnswers
  };
};

const mapDispatchToProps = dispatch => ({
  onGameStart: () => {
    dispatch({ type: START_GAME });
  },
  onGameEnd: () => dispatch({ type: END_GAME })
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
