import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../util/constant";

export const Title = ({ children, type = "primary" }) => {
  const style = type === "primary" ? styles.primaryTitle : styles.inverseTitle;
  const { width } = useWindowDimensions();
  const paddingTop = width > 500 ?  0 : 10
  return <Text style={[style, {paddingTop: paddingTop}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  primaryTitle: {
    fontSize: 28,
    fontFamily: 'open-sans-bold',
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    // fontWeight: "bold",
    color: COLORS.background,
    textAlign: "center",
  },
  inverseTitle: {
    fontSize: 28,
    padding: 10,
    fontFamily: 'open-sans-bold',
    borderBottomColor: "white",
    borderBottomWidth: 2,
    // fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  }
});
