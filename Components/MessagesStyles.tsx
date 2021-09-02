import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const ChatContainer = styled.View`
  padding: 0 5px;
`;

export const ChatTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-color: black;
  border-width: 1px;
  padding: 10px 10px;
`;
export const ImgWrapper = styled.View`
  border-color: black;
  padding: 0 5px;
  border-width: 1px;
  justify-content: center;
`;
export const UserImage = styled.Image`
  border-radius: 100px;
  height: 65px;
  border-color: black;
  border-width: 1px;
  width: 65px;
`;

export const ChatContent = styled.View`
  justify-content: space-between;
  width: 300px;
  border-color: black;
  border-width: 1px;
  height: 100px;

  padding: 10px 0;
`;

export const ChatHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-color: black;
  border-width: 1px;
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
