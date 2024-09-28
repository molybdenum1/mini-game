import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../util/constant";

export const LogItem = ({ roundNum, guess }) => {
  return (
    <View style={styles.item}>
      <Text>#{roundNum + 1}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.buttonBack,
    marginBottom: 5
  },
});
