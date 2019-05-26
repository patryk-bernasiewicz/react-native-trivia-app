import React, { Component } from 'react';
import { View, TouchableOpacity, Button, Text, StyleSheet } from 'react-native';

import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();

class QuestionItem extends Component {
  state = {
    answered: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return <Text>No Question</Text>;
    }

    return (
      <View style={{ ...styles.cardFace }}>
        <Text style={styles.top}>{entities.decode(question.question)}</Text>
        <View style={styles.bottom}>
          <Button
            title='True'
            onPress={() => this.props.onAnswer(question, 'True')}
          />
          <Button
            title='False'
            onPress={() => this.props.onAnswer(question, 'False')}
          />
        </View>
      </View>
    );
  }
}

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
    marginBottom: 20,
    textAlign: 'center'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  }
});
