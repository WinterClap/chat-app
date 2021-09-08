import React from "react";
import { CenteredView } from "../../../../Components/common";
import { Text, Button, FlatList, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ChatTabSlackParametersList } from "./ChatTabStackParametersList";
import faker from "faker";
import {
  ChatContainer,
  ChatContent,
  ChatHeader,
  ChatTouchableOpacity,
  Container,
  ImgWrapper,
  MessageText,
  MessageTextWrapper,
  Timestamp,
  UserImage,
  UserText,
} from "../../../../Components/MessagesStyles";
interface Props {}
const chats = [
  {
    id: "1",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.lorem.paragraphs(),
  },
  {
    id: "2",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.hacker.phrase(),
  },
  {
    id: "3",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.hacker.phrase(),
  },
  {
    id: "4",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.hacker.phrase(),
  },
  {
    id: "5",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.hacker.phrase(),
  },
  {
    id: "6",
    userName: faker.name.findName(),
    userImg: faker.image.avatar(),
    messageTime: faker.date.recent(),
    messageText: faker.hacker.phrase(),
  },
];
export const Chats = ({ navigation }: { navigation: StackNavigationProp<ChatTabSlackParametersList, "Chats"> }) => {
  const onChatPress = (username: string) => {
    navigation.navigate("CurrentChat", { username });
  };
  return (
    <Container>
      <FlatList
        data={chats}
        keyExtractor={(chat) => chat.id}
        renderItem={(chat) => (
          <ChatContainer>
            <ChatTouchableOpacity onPress={() => onChatPress(chat.item.userName)}>
              <ImgWrapper>
                <UserImage source={{ uri: chat.item.userImg }} />
              </ImgWrapper>
              <ChatContent>
                <ChatHeader>
                  <UserText>{chat.item.userName}</UserText>
                  <Timestamp>{chat.item.messageTime.toLocaleTimeString()}</Timestamp>
                </ChatHeader>
                <MessageTextWrapper>
                  <MessageText numberOfLines={2}>{chat.item.messageText}</MessageText>
                </MessageTextWrapper>
              </ChatContent>
            </ChatTouchableOpacity>
          </ChatContainer>
        )}
      />
    </Container>
  );
};
