import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import SignPage from "./pages/Sign";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const Routes = () => {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<SignPage />} />
    </Router>
  );
};

export default Routes;
