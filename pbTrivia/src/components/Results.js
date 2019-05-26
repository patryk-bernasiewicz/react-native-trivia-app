import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Results = ({ correctAnswers }) => {
  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.heading}>
          {correctAnswers > 4 ? 'Congratulations!' : 'Sorry...'}
        </Text>
        <Text style={styles.followUp}>
          You answered correctly {correctAnswers} out of 10 questions.
        </Text>
      </View>
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
    marginTop: 20,
    width: 220,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .6)',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    padding: 8
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  followUp: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
