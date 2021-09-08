import React from "react";
import { ImageSourcePropType } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FlexRow } from "./common";
import { PostImage, PostImageBox, PostImageContainer, Text } from "./HomeStyles";

interface Props {
  pictures: { uri: string }[] | ImageSourcePropType[];
}

export const HomePostMediaContainer = ({ pictures }: Props) => {
  if (pictures?.length === 0) return null;

  return (
    <PostImageContainer>
      <ScrollView
        style={{ flex: 1 }}
        decelerationRate="fast"
        snapToInterval={350}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {pictures.map((picture) => {
          return (
            <PostImageBox>
              <PostImage style={{ flex: 1 }} key={JSON.stringify(picture)} resizeMode="cover" source={picture} />
            </PostImageBox>
          );
        })}
      </ScrollView>
    </PostImageContainer>
  );
};
