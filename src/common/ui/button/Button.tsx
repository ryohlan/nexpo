import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export const Button = ({
  style,
  children,
  ...props
}: TouchableOpacityProps & { children: any }) => (
  <TouchableOpacity
    {...props}
    style={[
      {
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 240,
        borderRadius: 4,
        marginVertical: 10,
        marginTop: 40
      },
      style
    ]}
  >
    <Text
      style={{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
)
