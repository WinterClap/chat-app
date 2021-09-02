import React from "react";
import { CenteredView } from "../../../../Components/common";
import { Text } from "react-native";
import { ChatTabSlackParametersList } from "./ChatTabStackParametersList";
import { createStackNavigator } from "@react-navigation/stack";
import { Chats } from "./Chats";
import { Chat } from "./Chat";

const ChatSlack = createStackNavigator<ChatTabSlackParametersList>();

interface Props {}

export const ChatTabStack: React.FC<Props> = () => {
  return (
    <ChatSlack.Navigator screenOptions={() => ({ headerBackTitleVisible: false })}>
      <ChatSlack.Screen name="Chats" component={Chats} />
      <ChatSlack.Screen
        name="CurrentChat"
        component={Chat}
        options={({ route }) => ({ headerTitleAlign: "center", headerTitle: route.params.username })}
      />
    </ChatSlack.Navigator>
  );
};
