import { Inter_100Thin } from "@expo-google-fonts/inter";
import React from "react";
import { ButtonProps, TouchableOpacityProps } from "react-native";
import { ColorValue, View, FlexAlignType, Text, StyleSheet, TouchableOpacity, TextProps } from "react-native";
import styled from "styled-components/native";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface CenteredViewProps {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
  alignItems?: FlexAlignType | undefined;
  backgroundColor?: ColorValue | undefined;
}

export const CenteredView: React.FC<CenteredViewProps> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  backgroundColor = "#fff",
}) => {
  return (
    <View
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: 40,
        backgroundColor,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

interface FlexInterface {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
  alignItems?: FlexAlignType | undefined;
  padding?: string | number | undefined;
  margin?: string | number | undefined;
  direction?: "inherit" | "ltr" | "rtl" | undefined;
  marginHorizontal?: string | number | undefined;
  marginVertical?: string | number | undefined;
  marginTop?: number | undefined;
  marginBottom?: number | undefined;
  marginLeft?: number | undefined;
  marginRight?: number | undefined;
  width?: string | number | undefined;
}

export const Col: React.FC<FlexInterface> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  padding = 0,
  margin = 0,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width = "100%",
}) => {
  return (
    <View
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: padding,
        margin: margin,
        marginHorizontal,
        marginVertical,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        width,
      }}
    >
      {children}
    </View>
  );
};
export const Row: React.FC<FlexInterface> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  padding = 0,
  margin = 0,
  direction = "ltr",
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width = "100%",
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width,
        direction: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: padding,
        margin: margin,
        marginHorizontal,
        marginVertical,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }}
    >
      {children}
    </View>
  );
};

interface StyledTextProps extends TextProps {
  color?: string;
  fontSize?: number | undefined;
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  fontFamily?: string | undefined;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
}

export const StyledText: React.FC<StyledTextProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily,
      color: color || "#000",
      fontSize: fontSize,
      fontWeight: fontWeight || "normal",
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
    },
  });
  return <Text style={styles.text}>{children}</Text>;
};

type BigButtonPropss = Omit<ButtonProps, "title">;
interface BigButtonPropsExtension extends BigButtonPropss {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
  label: string;
  paddingHorizontal?: string | number | undefined;
  paddingVertical?: string | number | undefined;
  color?: string | undefined;
  backgroundColor?: string | undefined;
  fontSize?: number | undefined;
  marginVertical?: number | undefined;
  fontFamily?: string | undefined;
  width?: string | number | undefined;
}
export const BigButton: React.FC<BigButtonPropsExtension> = ({
  backgroundColor,
  children,
  width,
  label,
  paddingHorizontal,
  paddingVertical,
  fontSize = 15,
  fontFamily = "Montserrat_700Bold",
  color = "#000",
  marginVertical,
  justifyContent = "center",
  ...rest
}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      width,
      paddingHorizontal,
      paddingVertical,
      backgroundColor,
      marginVertical,
      justifyContent,
      alignItems: "center",
      flexDirection: "row",
    },
    text: {
      fontSize,
      fontFamily,
      color,
    },
  });
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};
interface StyledTouchableOpacity extends TouchableOpacityProps {}
export const StyledTouchableOpacity: React.FC<StyledTouchableOpacity> = ({ children, ...rest }) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

interface FlexboxInterface {
  m?: number | string;
  p?: number | string;
  justifyContent?: string;
  alignContent?: string;
}

export const FlexRow = styled.View<FlexboxInterface>`
  flex-direction: row;
  align-items: ${(props) => props.alignContent || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.m || "0"};
  padding: ${(props) => props.p || "0px"};
`;
export const FlexCol = styled.View<FlexboxInterface>`
  align-items: ${(props) => props.alignContent || "center"};
  margin: ${(props) => props.m || "0"};
  justify-content: ${(props) => props.justifyContent || "center"};
  padding: ${(props) => props.p || "0"};
`;
