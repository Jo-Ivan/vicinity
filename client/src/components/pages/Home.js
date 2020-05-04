import React from "react";
import Rentals from "../rentals/Rentals";

import Page from "../layout/Page";

const Home = () => {
  return (
    <Page title="Home" fluid={true}>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-primary has-text-centered is-size-2 title">Book unique homes and experiences today.</h1>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <Rentals />
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Home;
