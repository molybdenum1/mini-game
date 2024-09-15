import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../util/constant'

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     borderWidth: 4,
     borderColor: COLORS.last ,
     padding: 24,
     margin: 24,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center'  
    },
    numberText: {
        color: COLORS.inverse,
        fontSize: 36,
        fontWeight: 'bold'
    }
})
