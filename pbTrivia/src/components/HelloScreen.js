import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { START_GAME, END_GAME } from '../actions';

const HelloScreen = ({ onGameStart, onGameEnd, triviaStarted }) => {
  console.log('Trivia started: ', triviaStarted);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia!</Text>
      <Button onPress={() => onGameStart()} title='Start Game' />
    </View>
  );
};

HelloScreen.propTypes = {
  onGameStart: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  triviaStarted: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    triviaStarted: state.triviaStarted
  };
};

const mapDispatchToProps = dispatch => ({
  onGameStart: () => {
    console.log('Dispatch action');
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
  }
});
