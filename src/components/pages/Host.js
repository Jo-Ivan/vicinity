import React, { Fragment } from "react";
import RentalForm from "../rentals/RentalForm";

const Host = () => {
  return (
    <Fragment>
      <h1 className="has-text-primary has-text-centered is-size-2">
        Earn money as a vicinity host
      </h1>
      <RentalForm />
    </Fragment>
  );
};

export default Host;
