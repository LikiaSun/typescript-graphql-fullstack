import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export const light = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const dark = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const ThemeProvider = (props: any) => {
  return <MuiThemeProvider theme={dark} {...props} />;
};
