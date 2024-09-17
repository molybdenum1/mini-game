import React from "react";
import { View, StyleSheet } from "react-native";

export const Card = ({ children }) => {
  return <View style={styles.buttonsContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

});
