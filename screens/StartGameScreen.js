import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import { Title } from "../components/ui/Title";
import { COLORS } from "../util/constant.js";
import { Card } from "../components/ui/Card.js";
import { Paragraph } from "../components/ui/Paragraph.js";

export default function StartGameScreen({ onPickNumber }) {
  const [numValue, setNumValue] = useState("");

  const numberInputHandler = (enteredText) => {
    setNumValue(enteredText);
  };

  const resetInputHandler = () => {
    setNumValue("");
  };

  const confirmInputHandler = () => {
    if (!isNaN(numValue) || numValue > 0 || numValue < 100) {
      console.log(numValue);
      onPickNumber(numValue);
    } else {
      console.log("1");

      Alert.alert("loh", "aaaaa", [
        { text: "Ok", style: "default", onPress: numberInputHandler },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={styles.inputContainer}>
        <Title type="inverse">Guess Number</Title>
        <Paragraph>Enter a Number</Paragraph>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={2}
          autoCorrect={false}
          value={numValue}
          onChangeText={numberInputHandler}
        />
        <Card>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    padding: 16,
    marginTop: deviceHeight < 450 ? 30 : 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  instractionText: {
    color: COLORS.buttonBack,
    fontSize: 24,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.white,
    textAlign: "center",
    borderBottomWidth: 2,
    color: COLORS.white,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
  },
});
