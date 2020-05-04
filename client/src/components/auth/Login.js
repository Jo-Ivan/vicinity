import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Page from "../layout/Page";

const Login = () => {
  return (
    <Page title="Log in">
      <div className="columns is-vcentered">
        <div className="login column is-4 ">
          <section className="section">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-right">
                <input className="input" type="text" />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon="user" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-right">
                <input className="input" type="password" />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon="key" />
                </span>
              </div>
            </div>

            <div className="has-text-centered">
              <a className="button is-vcentered is-primary is-outlined">Login</a>
            </div>

            <div className="has-text-centered">
              <Link to="/signup"> Don't you have an account? Sign up now!</Link>
            </div>
          </section>
        </div>
        <div className="column is-8"></div>
      </div>
    </Page>
  );
};

export default Login;
