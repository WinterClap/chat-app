import React from "react";
import { View, Text, StyleSheet } from "react-native";
interface Props {
  upperText: string;
  boldText: string;
}

export const Header = ({ upperText, boldText }: Props) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ ...styles.text, ...styles.upper }}>{upperText}</Text>
      <Text style={{ ...styles.text, ...styles.bold }}>{boldText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "Montserrat_700Bold",
  },
  upper: {
    fontSize: 37,
    color: "#adadad",
  },
  bold: {
    fontSize: 50,
    color: "#000",
    fontFamily: "Montserrat_700Bold",
  },
});
