import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../util/constant";


export const Paragraph = ({children}) => {
  return <Text style={styles.instractionText}>{children}</Text>;
};

const styles = StyleSheet.create({
    instractionText: {
      fontFamily: 'open-sans',
      color: COLORS.buttonBack,
      fontSize: 24,
    },
  });
  