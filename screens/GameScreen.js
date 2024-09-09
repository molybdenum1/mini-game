import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Title } from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Guess number</Title>
      <View>
        <Text>Higher or lower?</Text>
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
    marginLeft: 10
  },
})