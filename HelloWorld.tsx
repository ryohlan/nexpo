import React from "react";
import { View, Text, Platform } from "react-native";

export const HelloWorld = () => (
  <View style={{ padding: 10 }}>
    <Text style={{ fontSize: 40 }}>Hello World. This env is {Platform.OS}</Text>
  </View>
);
