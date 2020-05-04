import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RentalAmenities = () => {
  return (
    <>
      <div className="column is-6">
        <span>
          <FontAwesomeIcon icon="asterisk" /> Cooling
        </span>
        <span>
          <FontAwesomeIcon icon="thermometer" /> Heating
        </span>
        <span>
          <FontAwesomeIcon icon="location-arrow" /> Iron
        </span>
      </div>
      <div className="column is-6">
        <span>
          <FontAwesomeIcon icon="desktop" /> Working area
        </span>
        <span>
          <FontAwesomeIcon icon="cube" /> Washing machine
        </span>
        <span>
          <FontAwesomeIcon icon="cube" /> Dishwasher
        </span>
      </div>
    </>
  );
};

export default RentalAmenities;
