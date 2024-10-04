import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { COLORS } from "../util/constant";
import { LogItem } from "../components/game/LogItem";

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
  const [guesses, setGuesses] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

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
    setGuesses((prev) => [newNumber, ...prev]);
  };

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === +choosenNumber) {
      onGameOver(guesses.length);
    }
  }, [currentGuess, choosenNumber, onGameOver]);

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.subtitle}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("-")}>
              --
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("+")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );

  if (width > 600) {
    content = (
      <>
        <View>
          <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("-")}>
                --
              </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("+")}>
                +
              </PrimaryButton>
            </View>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Guess number</Title>
      {content}
      <View style={styles.logList}>
        <Text style={styles.logListTitle}>Log Guesses</Text>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <LogItem guess={itemData.item} roundNum={itemData.index} />
          )}
          keyExtractor={(item) => item}
        />
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
  subtitle: {
    fontSize: 20,
    color: COLORS.inverse,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
  },
  logList: {
    marginTop: 10,
  },
  logListTitle: {
    fontSize: 20,
    color: COLORS.inverse,
    marginBottom: 10,
  },
});
