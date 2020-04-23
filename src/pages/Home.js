import React, { Fragment } from "react";
import Rentals from "../components/rentals/Rentals";

const Home = () => {
  return (
    <Fragment>
      <h1 className="has-text-primary has-text-centered is-size-2">Book unique homes and experiences today.</h1>
      <Rentals />
    </Fragment>
  );
};

export default Home;
