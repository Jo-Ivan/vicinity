import React from "react";

import LoginForm from "../forms/LoginForm";
import Page from "../layout/Page";

const Login = () => {
  return (
    <Page title="Log in">
      <div className="columns is-vcentered">
        <LoginForm />
        <div className="column is-8"></div>
      </div>
    </Page>
  );
};

export default Login;
