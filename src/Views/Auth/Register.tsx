import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Switch, Text, TextInput, View, StyleSheet } from "react-native";
import { BigButton, CenteredView, Col, Row, StyledText, StyledTouchableOpacity } from "../../../Components/common";
import { Header } from "../../../Components/Header";
import { KeyboardAvoidingWrapper } from "../../../Components/KeyboardAvoidingWrapper";
import { AuthParamList } from "./AuthParamList";

export const Register = ({ navigation }: { navigation: StackNavigationProp<AuthParamList, "Register"> }) => {
  return (
    <>
      <KeyboardAvoidingWrapper>
        <CenteredView justifyContent="space-around">
          <Header upperText="Create an" boldText="Account" />
          <Row marginVertical={20} alignItems="flex-start">
            <StyledTouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <StyledText fontFamily="Montserrat_700Bold" fontSize={30}>
                Log in
              </StyledText>
            </StyledTouchableOpacity>
            <StyledText color="#adadad" marginHorizontal={20} fontFamily="Montserrat_700Bold" fontSize={30}>
              or
            </StyledText>
            <Col width="auto">
              <StyledText fontFamily="Montserrat_700Bold" fontSize={30}>
                Sign up
              </StyledText>
              <View style={styles.highlight}></View>
            </Col>
          </Row>
          <View style={{ width: "100%" }}>
            <StyledText marginTop={15} fontFamily="Montserrat_700Bold" fontSize={20}>
              Email
            </StyledText>
            <TextInput style={styles.input} placeholder="Email" textContentType="emailAddress" />
          </View>
          <View style={{ width: "100%" }}>
            <StyledText marginTop={15} fontFamily="Montserrat_700Bold" fontSize={20}>
              Password
            </StyledText>
            <TextInput style={styles.input} placeholder="Password" textContentType="password" secureTextEntry />
          </View>
          <View style={{ width: "100%" }}>
            <StyledText marginTop={15} fontFamily="Montserrat_700Bold" fontSize={20}>
              Confirm password
            </StyledText>
            <TextInput style={styles.input} placeholder="Confirm password" textContentType="password" secureTextEntry />
          </View>
          {/* <Row justifyContent="space-between" marginTop={20}>
            <StyledText color="#adadad" marginHorizontal={20} fontFamily="Montserrat_700Bold" fontSize={15}>
              Remember me next time
            </StyledText>
            <Switch
              onValueChange={() => setRememberMeIsEnabled(!rememberMeIsEnabled)}
              value={rememberMeIsEnabled}
              trackColor={{ false: "#8f8f8f", true: "#00d15e" }}
              thumbColor={rememberMeIsEnabled ? "#fff" : "#fff"}
            />
          </Row> */}
          <BigButton
            label="Register"
            color="#fff"
            backgroundColor="#7F00FD"
            paddingHorizontal={20}
            paddingVertical={1}
            fontSize={20}
            marginVertical={20}
            onPress={() => {
              alert("register");
            }}
          />
        </CenteredView>
      </KeyboardAvoidingWrapper>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    backgroundColor: "#ededed",
    padding: 15,
    marginTop: 10,
    fontSize: 20,
  },
  highlight: {
    padding: 5,
    width: "70%",
    backgroundColor: "#7F00FD",
    borderRadius: 20,
  },
});
