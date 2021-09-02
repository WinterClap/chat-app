import React, { createContext, useContext, useState } from "react";
export const ThemeContext = createContext<any>({ isLightMode: true, changeMode: () => {} });
const themeDark = {
  background: "#121212",
  backgroundDimmed: "#252525",
  backgroundSaturated: "#000",
  primary: "#7F00FD",
  secondary: "#00FFD7",
  terciary: "#FF0828",
  success: "#00d15e",
  succesLight: "#65ff78",
  text: "#fff",
};

const themeLight = {
  ...themeDark,
  background: "#F9F5FF",
  backgroundDimmed: "#E4E1E8",
  text: "#000",
  backgroundSaturated: "#fff",
};

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true);
  const changeMode = () => {
    setIsLightMode(!isLightMode);
  };

  // const values = { isLightMode, changeMode };
  return <ThemeContext.Provider value={{ isLightMode, changeMode }}>{children}</ThemeContext.Provider>;
};
