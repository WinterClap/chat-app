import React from "react";
import { Text, TouchableOpacityProps, View } from "react-native";
import styled from "styled-components/native";
const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: 0 20px 0 0;
`;

interface Props extends TouchableOpacityProps {
  label: string;
  color: string;
  fontSize: number;
}

export const HeaderButton = ({ label, fontSize, color, ...rest }: Props) => {
  return (
    <>
      <StyledTouchableOpacity {...rest}>
        <Text style={{ fontWeight: "bold", color, fontSize }}> {label} </Text>
      </StyledTouchableOpacity>
    </>
  );
};

export const HeaderText = ({ label, fontSize, color }: Props) => {
  return <Text style={{ color, fontSize, marginRight: 10 }}>{label}</Text>;
};
