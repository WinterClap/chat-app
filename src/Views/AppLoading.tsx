import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

interface Props {}

export const AppLoading = (props: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF0828" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
});
