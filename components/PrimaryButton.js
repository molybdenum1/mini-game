import React from 'react'
import {View, Text, Pressable} from 'react-native'

export default function PrimaryButton({children}) {
  return (
    <View>
        <Text>
            {children}
        </Text>
    </View>
  )
}
