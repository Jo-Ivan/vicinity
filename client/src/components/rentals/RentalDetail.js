import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Preloader from "../layout/Preloader";
import Page from "../layout/Page";
import { getRentalById } from "../../actions/rentalActions";
import { capitalize } from "../../helpers/functions";

import RentalAmenities from "./RentalAmenities";
import Map from "../map/Map";

import "./RentalDetail.scss";

const RentalDetail = ({ rental: { rental, loading }, getRentalById, match }) => {
  const { title, image, shared, category, city, numOfRooms, description, coordinates } = rental;

  useEffect(() => {
    getRentalById(match.params.id);
  }, [getRentalById, match.params.id]);

  if (rental === null || loading) {
    return <Preloader />;
  }

  return (
    <Page title={!title ? "..." : title} fluid={true}>
      <section id="rental-details">
        <div className="upper-section">
          <div className="columns">
            <div className="column">
              <img src={image} alt="" />
            </div>
            <div className="column">
              <Map center={coordinates} zoom={18} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="columns">
            <div className="column is-8">
              <div className="rental">
                <h2 className="rental-type">
                  {shared ? "shared" : "single"} {category}
                </h2>
                <h1 className="rental-title is-size-3 has-text-weight-semibold">{title}</h1>
                <h2 className="rental-city">{capitalize(city)}</h2>
                <div className="rental-room-info">
                  <span>
                    <FontAwesomeIcon icon="building" />
                    {numOfRooms} bedrooms
                  </span>
                  <span>
                    <FontAwesomeIcon icon="user" /> {numOfRooms + 4} guests
                  </span>
                  <span>
                    <FontAwesomeIcon icon="bed" /> {numOfRooms + 2} beds
                  </span>
                </div>
                <p className="rental-description">{description}</p>
                <hr />
                <div className="rental-assets">
                  <h3 className="is-size-3 has-text-weight-semibold">Assets</h3>
                  <div className="columns">
                    <RentalAmenities />
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4"> BOOKING</div>
          </div>
        </div>
      </section>
    </Page>
  );
};

RentalDetail.propTypes = {
  rental: PropTypes.object.isRequired,
  getRentalById: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  rental: state.rental
});

export default connect(mapStateToProps, { getRentalById })(RentalDetail);
