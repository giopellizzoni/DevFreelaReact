import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import baseTheme from "../../commons/styles/theme";

const theme = createTheme(baseTheme);

function AppTheme({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledThemeProvider>
  );
}

export default AppTheme;
