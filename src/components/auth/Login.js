import React from "react";
import Page from "../layout/Page";

const Login = () => {
  return (
    <Page title="Log in">
      <h1 className="has-text-primary has-text-centered is-size-2">Log in</h1>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-primary">Login</button>
        </p>
      </div>
    </Page>
  );
};

export default Login;
