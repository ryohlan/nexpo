import React from 'react'
import { TextInput as RNTextInput, TextInputProps } from 'react-native'

export const TextInput = ({ style, ...props }: TextInputProps) => (
  <RNTextInput
    style={[
      {
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        width: 240,
        padding: 8,
        fontSize: 16
      },
      style
    ]}
    placeholderTextColor="rgba(0,0,0,0.3)"
    {...props}
  />
)
