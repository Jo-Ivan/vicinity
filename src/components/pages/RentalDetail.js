import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Preloader from "../layout/Preloader";
import Page from "../layout/Page";
import { getRental } from "../../actions/rentalActions";

import "./RentalDetail.scss";

const RentalDetail = ({ rental: { rental, loading }, getRental }) => {
  let { id } = useParams();

  useEffect(() => {
    getRental(id);
  }, []);

  if (loading || rental.id === null) {
    return <Preloader />;
  }

  return (
    <Page title="Detail">
      <section id="rental-details">
        <div className="upper-section">
          <div className="columns">
            <div className="column">
              <img src={rental.image} alt="" />
            </div>
            <div className="column">
              <img src={rental.image} alt="" />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="columns">
            <div className="column is-8">
              <div className="rental">
                <h2 className="rental-type">
                  {rental.shared ? "shared" : "single"} {rental.category}
                </h2>
                <h1 className="rental-title is-size-3 has-text-weight-semibold">{rental.title}</h1>
                <h2 className="rental-city">{rental.city}</h2>
                <div className="rental-room-info">
                  <span>
                    <i className="fa fa-building"></i>
                    {rental.numOfRooms} bedrooms
                  </span>
                  <span>
                    <i className="fa fa-user"></i> {rental.numOfRooms + 4} guests
                  </span>
                  <span>
                    <i className="fa fa-bed"></i> {rental.numOfRooms + 2} beds
                  </span>
                </div>
                <p className="rental-description">{rental.description}</p>
                <hr />
                <div className="rental-assets">
                  <h3 className="is-size-3 has-text-weight-semibold">Assets</h3>
                  <div className="columns">
                    <div className="column is-6">
                      <span>
                        <i className="fa fa-asterisk"></i> Cooling
                      </span>
                      <span>
                        <i className="fa fa-thermometer"></i> Heating
                      </span>
                      <span>
                        <i className="fa fa-location-arrow"></i> Iron
                      </span>
                    </div>
                    <div className="column is-6">
                      <span>
                        <i className="fa fa-desktop"></i> Working area
                      </span>
                      <span>
                        <i className="fa fa-cube"></i> Washing machine
                      </span>
                      <span>
                        <i className="fa fa-cube"></i> Dishwasher
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
  getRental: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  rental: state.rental,
});

export default connect(mapStateToProps, { getRental })(RentalDetail);
