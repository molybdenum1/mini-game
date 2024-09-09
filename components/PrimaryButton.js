import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  const pressHandler = () => {
    console.log("log");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed ? [styles.primaryBtn, styles.pressed] : styles.primaryBtn
        }
        android_ripple={{ color: "#DEE5D4" }}
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
    backgroundColor: "#FEF9D9",
    color: "#fff",
  },
  buttonText: {
    color: "#0B2F9F",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
