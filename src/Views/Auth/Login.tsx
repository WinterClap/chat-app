import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, Button, View, StyleSheet, BackHandler } from "react-native";
import { Switch, TextInput } from "react-native-gesture-handler";
import { BigButton, CenteredView, Col, Row, StyledText, StyledTouchableOpacity } from "../../../Components/common";
import { Header } from "../../../Components/Header";
import { KeyboardAvoidingWrapper } from "../../../Components/KeyboardAvoidingWrapper";
import { useAuth } from "../../../contexts/AuthProvider";
import { AuthParamList } from "./AuthParamList";
import { MaterialIcons } from "@expo/vector-icons";
export const Login = ({ navigation }: { navigation: StackNavigationProp<AuthParamList, "Login"> }) => {
  const { currentUser, login } = useAuth();
  const [rememberMeIsEnabled, setRememberMeIsEnabled] = React.useState(false);
  return (
    <>
      <KeyboardAvoidingWrapper>
        <CenteredView justifyContent="space-around">
          <Header upperText="Welcome" boldText="Back" />
          <Row marginVertical={20} alignItems="flex-start">
            <Col width="auto">
              <StyledText fontFamily="Montserrat_700Bold" fontSize={30}>
                Log in
              </StyledText>
              <View style={styles.highlight}></View>
            </Col>
            <StyledText color="#adadad" marginHorizontal={20} fontFamily="Montserrat_700Bold" fontSize={30}>
              or
            </StyledText>
            <StyledTouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <StyledText fontFamily="Montserrat_700Bold" fontSize={30}>
                Sign up
              </StyledText>
            </StyledTouchableOpacity>
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
          <Row justifyContent="space-between" marginTop={20}>
            <StyledText color="#adadad" marginHorizontal={20} fontFamily="Montserrat_700Bold" fontSize={15}>
              Remember me next time
            </StyledText>
            <Switch
              onValueChange={() => setRememberMeIsEnabled(!rememberMeIsEnabled)}
              value={rememberMeIsEnabled}
              trackColor={{ false: "#8f8f8f", true: "#00d15e" }}
              thumbColor={rememberMeIsEnabled ? "#fff" : "#fff"}
            />
          </Row>
          <BigButton
            label="Get Started"
            color="#fff"
            backgroundColor="#7F00FD"
            paddingHorizontal={15}
            paddingVertical={0}
            fontSize={20}
            justifyContent="space-between"
            marginVertical={20}
            onPress={() => login()}
          >
            <MaterialIcons name="navigate-next" size={40} color="#fff" />
          </BigButton>
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
