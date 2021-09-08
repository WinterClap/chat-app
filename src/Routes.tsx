import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigationState,
  RouteProp,
} from "@react-navigation/native";
import { Login } from "./Views/Auth/Login";
import { Register } from "./Views/Auth/Register";
import { AuthParamList } from "./Views/Auth/AuthParamList";
import { useAuth } from "../contexts/AuthProvider";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabsParamsList } from "./Views/HomeTabs/HomeTabsParamList";
import { Home } from "./Views/HomeTabs/Home";
import { Account } from "./Views/HomeTabs/Account";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ChatTabStack } from "./Views/HomeTabs/ChatTabStack/ChatTabStack";
import { HeaderButton, HeaderText } from "../Components/HeaderButton";
import { FlexRow } from "../Components/common";
import { TouchableOpacity } from "react-native";

interface Props {}

const Stack = createStackNavigator<AuthParamList>();
const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const isTabNavVisible = (route: any) => {
  let routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
  if (routeName === "CurrentChat") {
    return false;
  }
  return true;
};
export const Routes = (props: Props) => {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <NavigationContainer>
        {currentUser !== null ? (
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;

                if (route.name === "HomeTab") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "ChatTab") {
                  iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                } else if (route.name === "AccountTab") {
                  iconName = focused ? "user-alt" : "user";
                  return <FontAwesome5 name={iconName} size={size} color={color} />;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#7F00FD",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tabs.Screen
              name="HomeTab"
              component={Home}
              options={() => ({
                title: "Home",
                headerShown: true,
                headerRight: () => (
                  <TouchableOpacity>
                    <Ionicons name="add" size={45} color="#7F00FD" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Tabs.Screen
              name="ChatTab"
              component={ChatTabStack}
              options={({ route }) => ({
                title: "Chats",
                tabBarStyle: { display: isTabNavVisible(route) ? "flex" : "none" },
              })}
            />
            <Tabs.Screen
              name="AccountTab"
              component={Account}
              options={() => ({
                title: "Account",
                headerTitle: () => (
                  <TouchableOpacity onPress={() => logout()}>
                    <FlexRow>
                      <HeaderText color="red" fontSize={16} label="Log out" />
                      <Ionicons name="log-out-outline" size={24} color="red" />
                    </FlexRow>
                  </TouchableOpacity>
                ),
                headerTitleAlign: "left",
                headerShown: true,
                headerRight: () => <HeaderButton color="#7f00fd" fontSize={16} label="Edit profile" />,
              })}
            />
          </Tabs.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
