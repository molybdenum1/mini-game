import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton.js";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} keyboardType="numeric" maxLength={2} />
      <PrimaryButton>
        Reset
      </PrimaryButton>
      <PrimaryButton>
        Confirm
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 5,     
        backgroundColor: '#D2E0FB'
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#fff',
        textAlign: 'center',
        borderBottomWidth: 2,
        color: '#fff',
        marginVertical: 8,
        fontWeight: 'bold'
    }
})
