import styled from "styled-components/native";

export const Box = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  padding-top: 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #fff;
  shadow-color: #000;
  elevation: 20;
`;
export const ImageBox = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
export const ProfileImage = styled.Image`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;

export const Header = styled.Text<TextInterface>`
  font-weight: 600;
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
  font-size: 25px;
  margin: ${(props) => props.m || "0"};
`;

interface TextInterface {
  fontSize?: number | string;
  color?: string;
  m?: string | number;
}
export const DimmedText = styled.Text<TextInterface>`
  font-size: ${(props) => props.fontSize || "10"}px;
  color: ${(props) => props.color || "#000"};
  color: #444444;
`;
export const BoldText = styled.Text<TextInterface>`
  font-size: ${(props) => props.fontSize || "20"}px;
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
`;

export const Button = styled.TouchableOpacity`
  padding: 15px 20px;
  border-radius: 20px;
  background-color: #7f00fd;
  align-items: center;
  shadow-color: #000;
  elevation: 20;
  justify-content: center;
`;
