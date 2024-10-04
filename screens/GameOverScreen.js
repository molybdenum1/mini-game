import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Title } from "../components/ui/Title";
import { COLORS } from "../util/constant";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onRestartGame,
}) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.screen}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.jpg")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightedText}>{roundsNumber}</Text> to get{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onRestartGame}>Restart</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 150,
    // height: deviceWidth < 480 ?  150 : 300,
    // width: deviceWidth < 480 ?  150 : 300,
    // borderWidth: deviceWidth < 380 ?  2 : 3,
    borderColor: COLORS.inverse,
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    marginVertical: 10,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: COLORS.inverse,
  },
});
