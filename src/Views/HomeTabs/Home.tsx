import React from "react";
import { CenteredView, FlexCol, FlexRow, StyledText } from "../../../Components/common";
import {
  BoldText,
  Box,
  capitalize,
  CategoryBox,
  CategoryPill,
  CategoryText,
  Container,
  DimmedText,
  ProfileImage,
  ProfileImageBox,
  ReactionBox,
  ReactionIconBox,
  TextContainer,
} from "../../../Components/HomeStyles";
import { useAuth } from "../../../contexts/AuthProvider";
import { FlatList, NativeTouchEvent, Text } from "react-native";
import faker from "faker";
import { Ionicons } from "@expo/vector-icons";
import { HomePostTextContainer } from "../../../Components/HomePostTextContainer";
import { HomePostMediaContainer } from "../../../Components/HomePostMediaContainer";

interface Props {}

const iconValues: any = {
  food: ["ice-cream-outline", "fast-food-outline", "pizza-outline"],
  object: ["american-football-outline", "football-outline", "game-controller-outline", "headset-outline"],
  other: ["gift-outline", "basket-outline"],
};
const data = [
  {
    id: "5",
    name: faker.name.findName(),
    dateDifference: "2 hours ago",
    post: faker.lorem.paragraphs(),
    profilePicture: faker.image.avatar(),
    categories: ["food", "object", "other"],
    reactions: { likesAmount: Math.floor(Math.random() * 1000), commentsAmount: Math.floor(Math.random() * 400) },
    pictures: [{ uri: faker.image.imageUrl(undefined, undefined, undefined, true) }],
    status: "available",
  },
  {
    id: "1",
    name: faker.name.findName(),
    dateDifference: "2 hours ago",
    post: faker.lorem.paragraphs(),
    profilePicture: faker.image.avatar(),
    categories: ["food", "object", "other"],
    reactions: { likesAmount: Math.floor(Math.random() * 1000), commentsAmount: Math.floor(Math.random() * 400) },
    pictures: [
      { uri: faker.image.imageUrl(undefined, undefined, undefined, true) },
      { uri: faker.image.animals() },
      { uri: faker.image.business() },
      { uri: faker.image.abstract() },
    ],
    status: "available",
  },
  {
    id: "4",
    name: faker.name.findName(),
    dateDifference: "2 hours ago",
    post: faker.lorem.paragraphs(),
    profilePicture: faker.image.avatar(),
    categories: ["food", "object", "other"],
    reactions: { likesAmount: Math.floor(Math.random() * 1000), commentsAmount: Math.floor(Math.random() * 400) },
    pictures: [{ uri: faker.image.imageUrl(undefined, undefined, undefined, true) }, { uri: faker.image.animals() }],
    status: "available",
  },
  {
    id: "2",
    name: faker.name.findName(),
    dateDifference: "2 hours ago",
    post: faker.lorem.paragraphs(),
    profilePicture: faker.image.avatar(),
    categories: ["food", "object", "other"],
    reactions: { likesAmount: Math.floor(Math.random() * 1000), commentsAmount: Math.floor(Math.random() * 400) },
    pictures: [
      { uri: faker.image.imageUrl(undefined, undefined, undefined, true) },
      { uri: faker.image.animals() },
      { uri: faker.image.imageUrl(undefined, undefined, undefined, true) },
    ],
    status: "available",
  },
  {
    id: "3",
    dateDifference: "5 hours ago",
    name: faker.name.findName(),
    post: faker.lorem.paragraph(),
    profilePicture: faker.image.avatar(),
    categories: ["food"],
    reactions: { likesAmount: Math.floor(Math.random() * 1000), commentsAmount: Math.floor(Math.random() * 400) },
    status: "available",
    pictures: [],
  },
];
export const Home = ({}: Props) => {
  const { currentUser } = useAuth();

  return (
    <Box>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(items) => (
          <Container>
            <FlexRow justifyContent="flex-start">
              <ProfileImageBox>
                <ProfileImage source={{ uri: items.item.profilePicture }} />
              </ProfileImageBox>
              <FlexCol alignContent="flex-start">
                <BoldText>{items.item.name}</BoldText>
                <DimmedText>{items.item.dateDifference}</DimmedText>
              </FlexCol>
            </FlexRow>
            <CategoryBox>
              <FlexRow justifyContent="flex-start">
                {items.item.categories.map((category: any) => (
                  <CategoryPill key={items.item.id + category}>
                    <Ionicons
                      name={iconValues[category][Math.floor(Math.random() * iconValues[category].length)]}
                      size={20}
                      color="#ff0828"
                    />
                    <CategoryText>{"#" + capitalize(category)}</CategoryText>
                  </CategoryPill>
                ))}
              </FlexRow>
            </CategoryBox>
            <HomePostMediaContainer pictures={items.item.pictures} />
            <HomePostTextContainer largeText={items.item.post} />
            <ReactionBox>
              <ReactionIconBox>
                <Ionicons name="heart-outline" size={30} />
                <BoldText m="0 0 0 5px">{items.item.reactions.commentsAmount}</BoldText>
              </ReactionIconBox>
              <ReactionIconBox>
                <Ionicons name="chatbubble-ellipses" size={30} />
                <BoldText m="0 0 0 5px">{items.item.reactions.likesAmount}</BoldText>
              </ReactionIconBox>
            </ReactionBox>
          </Container>
        )}
      />
    </Box>
  );
};
