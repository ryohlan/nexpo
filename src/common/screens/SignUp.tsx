import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'src/common/ui/button/Button'
import { TextInput } from 'src/common/ui/form/TextInput'

export const SingUp = () => (
  <Wrapper>
    <SignUpTitle style={{ color: 'black' }} />
    <BasicTextForm />
    <PasswordForm />
    <Button>SIGN UP</Button>
  </Wrapper>
)

const Wrapper = (props: any) => (
  <View
    {...props}
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  />
)

const SignUpTitle = (props: any) => (
  <Text
    {...props}
    style={{
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 30,
      ...props.style
    }}
  >
    Sign Up
  </Text>
)

const BasicTextForm = () => (
  <TextInput
    style={{
      marginVertical: 10
    }}
    placeholder="Input your email"
    placeholderTextColor="rgba(0,0,0,0.3)"
  />
)

const PasswordForm = () => (
  <TextInput
    style={{
      marginVertical: 10
    }}
    placeholder="Input your password"
    placeholderTextColor="rgba(0,0,0,0.3)"
    secureTextEntry
  />
)
