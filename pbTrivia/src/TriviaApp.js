import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class TriviaApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={triviaStyles.text}>Trivia!</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    triviaStarted: state.triviaStarted
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const triviaStyles = StyleSheet.create({
  text: {
    fontSize: 42,
    fontWeight: "bold"
  }
});
