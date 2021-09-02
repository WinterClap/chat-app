import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { FrancoisOne_400Regular } from "@expo-google-fonts/francois-one";
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { AuthProvider } from "./contexts/AuthProvider";
import { ThemeProvider } from "./contexts/themeContext";
import { Routes } from "./src/Routes";
import { AppLoading } from "./src/Views/AppLoading";
import "react-native-gesture-handler";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  text: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "800",
  },
  buttonNext: {
    flex: 1,
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    FrancoisOne_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <ThemeProvider>
        <StatusBar backgroundColor="#fff" />

        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
