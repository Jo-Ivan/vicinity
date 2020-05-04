import React from "react";

import SignupForm from "../forms/SignupForm";
import Page from "../layout/Page";

const Signup = () => {
  return (
    <Page title="Sign up">
      <div className="columns is-vcentered">
        <SignupForm />
        <div className="column is-8"></div>
      </div>
    </Page>
  );
};

export default Signup;
