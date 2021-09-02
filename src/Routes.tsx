import React from "react";
import { Animated, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
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
import { Icon } from "@expo/vector-icons/build/createIconSet";

interface Props {}

const Stack = createStackNavigator<AuthParamList>();
const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const isTabNavVisible = (route: any) => {
  let routeName = route.state ? route.state.routes[route.state.index].name : "";
  console.log(routeName);
  if (routeName === "Chat") {
    return false;
  }
  return true;
};
export const Routes = (props: Props) => {
  const { currentUser } = useAuth();

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
            <Tabs.Screen name="HomeTab" component={Home} options={() => ({ title: "Home" })} />
            <Tabs.Screen
              name="ChatTab"
              component={ChatTabStack}
              options={({ route }) => ({
                title: "Chats",
                tabBarStyle: { display: isTabNavVisible(route) ? "flex" : "none" },
              })}
            />
            <Tabs.Screen name="AccountTab" component={Account} options={() => ({ title: "Account" })} />
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
