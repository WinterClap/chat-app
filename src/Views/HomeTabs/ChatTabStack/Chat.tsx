import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useCallback, useState } from "react";
import { CenteredView, StyledText } from "../../../../Components/common";
import { useAuth } from "../../../../contexts/AuthProvider";
import { ChatTabSlackParametersList } from "./ChatTabStackParametersList";
import { Send, Bubble, BubbleProps, GiftedChat, IMessage, SendProps } from "react-native-gifted-chat";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
const StyledSend = (props: SendProps<IMessage>) => {
  return (
    <Send {...props}>
      <View style={{ marginBottom: 5, marginRight: 10, marginLeft: 5 }}>
        <Ionicons name="send" color="#7F00FD" size={32} />
      </View>
    </Send>
  );
};

const ScrollToBottomComponent = () => {
  return <FontAwesome5 name="angle-double-down" color="#333" />;
};

const StyledBubble = (props: BubbleProps<IMessage>) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{ right: { backgroundColor: "#7F00FD", marginRight: 10 }, left: {} }}
      textStyle={{ right: { color: "#fff" }, left: { color: "#7F00FD" } }}
    />
  );
};

interface ChatProps {}

export const Chat = ({ route }: { route: RouteProp<ChatTabSlackParametersList, "CurrentChat"> }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "ME",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={StyledBubble}
        renderSend={StyledSend}
        scrollToBottomComponent={ScrollToBottomComponent}
        alwaysShowSend
        scrollToBottom
      />
    </>
  );
};
