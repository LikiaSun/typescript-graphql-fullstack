import React from "react";
import { Grid, Typography } from "@material-ui/core";

import SignUpForm from "./Form";

export default function Sign() {
  return (
    <Grid container alignContent="center" style={{ minHeight: "100vh" }}>
      <Grid container item justify="center" xs={12}>
        <Typography variant="h4" align="center">
          Noul
        </Typography>
        <SignUpForm />
      </Grid>
    </Grid>
  );
}
