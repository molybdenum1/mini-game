import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let min = 1;
let max = 100;

export default function GameScreen({ choosenNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, choosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "-" && currentGuess < choosenNumber) ||
      (direction === "+" && currentGuess > choosenNumber)
    ) {
      Alert.alert("Don't lie", "You know tha this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "-") {
      console.log(direction);
      max = currentGuess - 1;
    } else {
      console.log(direction);
      min = currentGuess + 1;
    }
    const newNumber = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newNumber);
  };

  useEffect(() => {
    if (currentGuess === +choosenNumber) {
      console.log(true);
      
      onGameOver();
    }
  }, [currentGuess, choosenNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Guess number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("-")}>-</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("+")}>+</PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 100,
    marginLeft: 10,
  },
});
