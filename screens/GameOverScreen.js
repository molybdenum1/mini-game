import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Title } from "../components/ui/Title";
import { COLORS } from "../util/constant";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightedText}>X</Text> to get <Text style={styles.highlightedText}>Y</Text>.
      </Text>
      <PrimaryButton>
        Restart
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: COLORS.inverse,
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    marginVertical: 10
  },
  highlightedText: {
    fontFamily: 'open-sans-bold',
    color: COLORS.inverse
  }
});
