import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  Text,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

export const KeyboardAvoidingWrapper: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
