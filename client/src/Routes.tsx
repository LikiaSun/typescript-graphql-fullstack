import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const Routes = () => {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<SignInPage />} />
      <RouterPage path="/sign-up" pageComponent={<SignUpPage />} />
    </Router>
  );
};

export default Routes;
