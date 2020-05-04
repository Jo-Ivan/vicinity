import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Page from "../layout/Page";

const Signup = () => {
  return (
    <Page title="Sign up">
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
              <label className="label">Email</label>
              <div className="control has-icons-right">
                <input className="input" type="text" />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon="envelope" />
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

            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control has-icons-right">
                <input className="input" type="password" />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon="key" />
                </span>
              </div>
            </div>

            <div className="has-text-centered">
              <a className="button is-vcentered is-primary is-outlined">Sign Up</a>
            </div>

            <div className="has-text-centered">
              <Link to="/login"> Already have an account? Log in now!</Link>
            </div>
          </section>
        </div>
        <div className="column is-8"></div>
      </div>
    </Page>
  );
};

export default Signup;
