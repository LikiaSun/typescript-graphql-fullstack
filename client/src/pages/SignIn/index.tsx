import React from "react";
import { Grid, Typography } from "@material-ui/core";

import LoginForm from "./Form";

export default function Sign() {
  return (
    <Grid container alignContent="center" style={{ minHeight: "100vh" }}>
      <Grid container item justify="center" xs={12}>
        <Typography variant="h4" align="center">
          Noul
        </Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
