import React from "react";
import RentalForm from "../forms/RentalForm";

import Page from "../layout/Page";

const Host = () => {
  return (
    <Page title="Host" fluid={true}>
      <h1 className="has-text-primary has-text-centered is-size-2">Earn money as a vicinity host</h1>
      <RentalForm />
    </Page>
  );
};

export default Host;
