import React from "react";
import { CenteredView, FlexCol, FlexRow, StyledText } from "../../../Components/common";
import {
  BoldText,
  Box,
  Button,
  Container,
  DimmedText,
  Header,
  ImageBox,
  ProfileImage,
} from "../../../Components/ProfileStyles";
import faker from "faker";

const data = {
  name: "Charles Peprah",
  profilePicture: faker.image.avatar(),
  posts: 30,
  pendingDeliveries: 5.0,
};

interface Props {}

export const Account = ({}) => {
  return (
    <Box>
      <Container>
        <FlexRow justifyContent="space-around">
          <ImageBox>
            <ProfileImage source={{ uri: data.profilePicture }} />
          </ImageBox>
          <Header>{data.name}</Header>
        </FlexRow>
        <FlexRow justifyContent="space-around" m="20px 0">
          <FlexCol>
            <DimmedText fontSize={20}>Posts</DimmedText>
            <BoldText>{data.posts}</BoldText>
          </FlexCol>
          <FlexCol>
            <DimmedText fontSize={20}>Pending Deliveries</DimmedText>
            <BoldText>{data.pendingDeliveries}</BoldText>
          </FlexCol>
          <Button>
            <BoldText color="#fff">New post</BoldText>
          </Button>
        </FlexRow>
      </Container>
      <Header fontSize={40} m="30px 0 0px 10px">
        My posts
      </Header>
    </Box>
  );
};
