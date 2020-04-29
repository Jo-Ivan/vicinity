import React from "react";
import Rentals from "../rentals/Rentals";

import Page from "../layout/Page";

const Home = () => {
  return (
    <Page title="Home" fluid={true}>
      <h1 className="has-text-primary has-text-centered is-size-2">Book unique homes and experiences today.</h1>
      <Rentals />
    </Page>
  );
};

export default Home;
