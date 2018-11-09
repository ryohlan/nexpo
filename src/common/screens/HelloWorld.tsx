import React from "react";
import { View, Text } from "react-native";

export const HelloWorld = () => (
  <Wrapper>
    <HelloWorldText />
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
