import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Results = ({ correctAnswers }) => {
  return (
    <View style={styles.result}>
      <Text>{correctAnswers > 4 ? 'Congratulations!' : 'Sorry...'}</Text>
      <Text>You answered correctly {correctAnswers} out of 10 questions.</Text>
    </View>
  );
};

Results.propTypes = {
  correctAnswers: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    correctAnswers: state.correctAnswers
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

const styles = StyleSheet.create({
  results: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
});
