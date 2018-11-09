import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloWorld } from "src/common/screens/HelloWorld";
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(HelloWorld, null)));
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
