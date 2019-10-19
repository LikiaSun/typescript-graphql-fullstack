import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Form = () => {
  const [loginForm, setForm] = useState({
    username: "",
    password: "",
    checkPassword: "",
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

  const handleCheckPassword = (e: any) => {
    setForm({
      ...loginForm,
      checkPassword: e.target.value,
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
      <Grid container item xs={12} justify="center">
        <TextField
          id="check-password"
          label="Repeat Password"
          type="password"
          value={loginForm.checkPassword}
          onChange={handleCheckPassword}
        />
      </Grid>
      <Grid container item xs={12} alignContent="center" justify="space-around">
        <Button
          disabled={
            loginForm.username.length == 0 && loginForm.password.length == 0
              ? true
              : false
          }
        >
          Sign-up
        </Button>
      </Grid>
    </>
  );
};

export default Form;
