import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();

const QuestionItem = ({ onAnswer, question }) => {
  if (!question) {
    return <Text>No Question</Text>;
  }

  return (
    <View style={{ ...styles.cardFace }}>
      <Text style={styles.top}>{entities.decode(question.question)}</Text>
      <View style={styles.bottom}>
        <Button title='True' onPress={() => onAnswer(question, 'True')} />
        <Button title='False' onPress={() => onAnswer(question, 'False')} />
      </View>
    </View>
  );
};

QuestionItem.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};

export default QuestionItem;

const styles = StyleSheet.create({
  view: {
    width: 350,
    height: 150,
    marginBottom: 20,
    justifyContent: 'center'
  },
  cardFace: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    borderColor: 'rgba(0, 0, 0, .6)',
    borderRadius: 8,
    borderWidth: 4,
    width: 350,
    height: 180,
    padding: 20
  },
  top: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  }
});
