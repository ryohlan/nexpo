import React from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";

export const HelloWorld = () => (
  <Wrapper>
    <HelloWorldText />
    <BasicTextForm />
    <PasswordForm />
    <SignUpButton onPress={() => Alert.alert("hogehoge")} />
    <LoginButton onPress={() => console.log("login")} />
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
      width: 240,
      borderRadius: 4,
      marginVertical: 10
    }}
  >
    <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 18 }}>
      LOGIN
    </Text>
  </TouchableOpacity>
);

const SignUpButton = (props: any) => (
  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: 240,
      borderRadius: 4,
      marginVertical: 10
    }}
  >
    <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 18 }}>
      SIGN UP
    </Text>
  </TouchableOpacity>
);

const BasicTextForm = (props: any) => (
  <TextInput
    {...props}
    style={{
      borderBottomColor: "#333",
      borderBottomWidth: 1,
      width: 240,
      padding: 8,
      fontSize: 16,
      marginVertical: 10
    }}
    placeholder="Input your email"
    placeholderTextColor="rgba(0,0,0,0.3)"
  />
);

const PasswordForm = (props: any) => (
  <TextInput
    {...props}
    style={{
      borderBottomColor: "#333",
      borderBottomWidth: 1,
      width: 240,
      padding: 8,
      fontSize: 16,
      marginVertical: 10
    }}
    placeholder="Input your password"
    placeholderTextColor="rgba(0,0,0,0.3)"
    secureTextEntry
  />
);
