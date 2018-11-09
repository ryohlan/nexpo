import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HelloWorld } from "./HelloWorld";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorld />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
