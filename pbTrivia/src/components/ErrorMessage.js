import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  return (
    <View>
      <Text style={styles.errorMessage}>{error.toString()}</Text>
    </View>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
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
