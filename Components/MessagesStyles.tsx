import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const ChatContainer = styled.View`
  padding: 0 5px;
  border-radius: 20px;
`;

export const ChatTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 5px 10px;
`;
export const ImgWrapper = styled.TouchableOpacity`
  padding: 0 5px;
  justify-content: center;
`;
export const UserImage = styled.Image`
  border-radius: 100px;
  height: 65px;
  width: 65px;
`;

export const ChatContent = styled.View`
  justify-content: space-between;
  width: 300px;
  height: 100px;
  border-bottom-width: 1px;
  border-color: #727272;
  padding: 10px 0;
`;

export const ChatHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const UserText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;
export const Timestamp = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`;

export const MessageTextWrapper = styled.View`
  overflow: hidden;
  height: 35px;
`;

export const MessageText = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`;
