import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const HelloWorld = () => (
  <Wrapper>
    <HelloWorldText />
    <LoginButton />
  </Wrapper>
);

const Wrapper = (props: any) => (
  <View
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    {...props}
  />
);

const HelloWorldText = (props: any) => (
  <Text
    style={{ fontSize: 40, textAlign: "center", fontWeight: "bold" }}
    {...props}
  >
    HelloWorld
  </Text>
);

const LoginButton = (props: any) => (
  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: 200,
      borderRadius: 4,
      marginTop: 20
    }}
  >
    <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 18 }}>
      LOGIN
    </Text>
  </TouchableOpacity>
);
