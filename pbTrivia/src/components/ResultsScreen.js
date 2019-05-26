import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Button,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { AllHtmlEntities as Entities } from 'html-entities';

import { reset } from '../actions';

const ResultsScreen = ({ answers, questions, resetGame }) => {
  const correctAnswers = answers.filter(answer => answer.valid);
  const entities = new Entities();

  return (
    <ScrollView>
      <View>
        <Text style={styles.heading}>You scored</Text>
        <Text style={styles.heading}>
          {correctAnswers.length} / {questions.length}
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={answers}
        keyExtractor={(item, index) => `question-${index}`}
        renderItem={({ item }) => (
          <View
            key={item.key}
            style={{
              ...styles.answer,
              ...(item.valid ? styles.validAnswer : styles.invalidAnswer)
            }}
          >
            <Text>
              {item.valid ? '+' : '-'} {entities.decode(item.question)}
            </Text>
            <Text>Your answer: {item.answer}</Text>
          </View>
        )}
      />
      <Button onPress={() => resetGame()} title='PLAY AGAIN?' />
    </ScrollView>
  );
};

ResultsScreen.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    questions: state.questions,
    answers: state.answers
  };
};

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsScreen);

const styles = {
  list: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 3,
    textAlign: 'center'
  },
  answer: {
    borderWidth: 2,
    marginBottom: 10,
    padding: 5
  },
  validAnswer: {
    borderColor: '#55aa00',
    backgroundColor: '#ddffdd'
  },
  invalidAnswer: {
    borderColor: '#ff4422',
    backgroundColor: '#ffdddd'
  }
};
