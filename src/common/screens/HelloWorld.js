import React from "react";
import { View, Text } from "react-native";
export const HelloWorld = () => (React.createElement(Wrapper, null,
    React.createElement(HelloWorldText, null)));
const Wrapper = (props) => (React.createElement(View, Object.assign({ style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    } }, props)));
const HelloWorldText = (props) => (React.createElement(Text, Object.assign({ style: { fontSize: 40, textAlign: "center", fontWeight: "bold" } }, props), "HelloWorld"));
