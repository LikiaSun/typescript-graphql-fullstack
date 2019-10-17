import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

export const baseTheme = createMuiTheme({
  palette: {
    secondary: {
      main: indigo[500],
    },
  },
});

export const ThemeProvider = (props: any) => {
  return <MuiThemeProvider theme={baseTheme} {...props} />;
};
