import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { fetchQuestions, answerQuestion, finishTrivia } from '../actions';

import QuestionItem from './QuestionItem';

class TriviaScreen extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchQuestions());
  }

  onAnswer = (question, answer) => {
    const final =
      this.props.currentQuestion + 1 === this.props.questions.length;
    this.props.dispatch(answerQuestion(question, answer));
    if (final) {
      this.props.dispatch(finishTrivia());
    }
  };

  render() {
    const { loading, questions, currentQuestion } = this.props;

    if (loading) {
      return <Text style={styles.loading}>Loading...</Text>;
    }

    if (!questions) {
      return (
        <View>
          <Text>No questions still..</Text>
        </View>
      );
    }

    return (
      <View style={styles.view}>
        <Text style={styles.counter}>
          Question {currentQuestion + 1}/{questions.length}
        </Text>
        <QuestionItem
          question={questions[currentQuestion]}
          onAnswer={this.onAnswer}
        />
      </View>
    );
  }
}

TriviaScreen.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({ fetchQuestions, dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaScreen);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  counter: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 4
  },
  loading: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center'
  }
});
