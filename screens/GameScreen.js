import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
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

export default function GameScreen({ choosenNumber }) {
  const initialGuess = generateRandomNumber(min, max, choosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    
    if (direction === '-') {
      console.log(direction);
      max = currentGuess - 1;
    } else {
      console.log(direction);
      min = currentGuess + 1;
    }
    const newNumber = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Guess number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('-')}>-</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('+')}>+</PrimaryButton>
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
