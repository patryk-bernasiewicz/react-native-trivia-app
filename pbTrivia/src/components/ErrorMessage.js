import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ error }) => {
  console.log(error);
  return (
    <View>
      <Text style={styles.errorMessage}>{error.toString()}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMessage: {
    color: '#ff0000',
    fontWeight: 'bold',
    maxWidth: 350,
    textAlign: 'center',
    marginTop: 15
  }
});
