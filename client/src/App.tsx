import React from "react";
import { UserProvider } from "./store/UserContext";
import { ThemeProvider } from "./store/ThemeContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </UserProvider>
  );
}
