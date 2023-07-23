import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

type IThemeProviderProps = {
  children: React.ReactNode;
};

// Criado provedor de tema global
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
