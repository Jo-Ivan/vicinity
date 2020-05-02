import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Preloader from "../layout/Preloader";
import Page from "../layout/Page";
import { getRental } from "../../actions/rentalActions";
import { capitalize } from "../../helpers/functions";

import "./RentalDetail.scss";

const RentalDetail = ({ rental: { rental, loading }, getRental }) => {
  let { id } = useParams();
  const { title, image, shared, category, city, numOfRooms, description } = rental;

  useEffect(() => {
    getRental(id);
  }, [getRental, id]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Page title={title}>
      <section id="rental-details">
        <div className="upper-section">
          <div className="columns">
            <div className="column">
              <img src={image} alt="" />
            </div>
            <div className="column">
              <img src={image} alt="" />
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
  getRental: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  rental: state.rental
});

export default connect(mapStateToProps, { getRental })(RentalDetail);
