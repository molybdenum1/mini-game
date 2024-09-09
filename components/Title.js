import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../util/constant";

export const Title = ({ children, type = "primary" }) => {
  const style = type === "primary" ? styles.primaryTitle : styles.inverseTitle;
  return <Text style={style}>{children}</Text>;
};

const styles = StyleSheet.create({
  primaryTitle: {
    fontSize: 28,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    fontWeight: "bold",
    color: COLORS.background,
    textAlign: "center",
  },
  inverseTitle: {
    fontSize: 28,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  }
});
