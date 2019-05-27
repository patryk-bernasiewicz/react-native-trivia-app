import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AllHtmlEntities as Entities } from 'html-entities';

import { fetchQuestions, answerQuestion, finishTrivia } from '../actions';

import QuestionItem from './QuestionItem';

class TriviaScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  onAnswer = (question, answer) => {
    const final = this.props.currentQuestion + 1 >= this.props.questions.length;
    this.props.dispatch(answerQuestion(question, answer));
    if (final) {
      this.props.dispatch(finishTrivia());
    }
  };

  render() {
    const { loading, questions, currentQuestion } = this.props;
    const entities = new Entities();

    const question = questions[currentQuestion];

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
        <Text style={styles.category}>
          {entities.decode(question.category)}
        </Text>
        <QuestionItem question={question} onAnswer={this.onAnswer} />
        <Text style={styles.counter}>
          {currentQuestion + 1} of {questions.length}
        </Text>
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
  category: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8
  },
  loading: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center'
  }
});
