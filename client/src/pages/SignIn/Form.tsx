import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Form = () => {
  const [loginForm, setForm] = useState({
    username: "",
    password: "",
  });

  const handleUsername = (e: any) => {
    setForm({
      ...loginForm,
      username: e.target.value,
    });
  };

  const handlePassword = (e: any) => {
    setForm({
      ...loginForm,
      password: e.target.value,
    });
  };

  return (
    <>
      <Grid container item xs={12} justify="center">
        <TextField
          id="username"
          label="Username"
          value={loginForm.username}
          onChange={handleUsername}
        />
      </Grid>
      <Grid container item xs={12} justify="center">
        <TextField
          id="password"
          label="Password"
          type="password"
          value={loginForm.password}
          onChange={handlePassword}
        />
      </Grid>
      <Grid container item xs={12} alignContent="center" justify="space-around">
        <Grid container item xs={6} justify="flex-end">
          <Button
            disabled={
              loginForm.username.length == 0 && loginForm.password.length == 0
                ? true
                : false
            }
          >
            Sign-in
          </Button>
        </Grid>
        <Grid container item xs={6} justify="flex-start">
          <Button>Sign-up</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
