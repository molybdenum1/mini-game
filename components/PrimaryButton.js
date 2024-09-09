import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../util/constant";

export default function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.primaryBtn, styles.pressed] : styles.primaryBtn
        }
        android_ripple={{ color: COLORS.primary }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 10,
    borderRadius: 18,
    overflow: "hidden",
  },
  primaryBtn: {
    elevation: 5,
    padding: 10,
    backgroundColor: COLORS.buttonBack,
    color: COLORS.white,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
