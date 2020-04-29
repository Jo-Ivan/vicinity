import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Preloader from "../layout/Preloader";
import { getRental } from "../../actions/rentalActions";

import "./RentalDetail.scss";

const RentalDetail = ({ rental: { loading }, getRental }) => {
  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    getRental(id);
  }, [getRental, id]);

  if (loading || id === null) {
    return <Preloader />;
  }

  return (
    <section id="rental-details">
      <div className="upper-section">
        <div className="columns">
          <div className="column">
            {/* <!-- TODO: Display rental image --> */}
            <img src="#" alt="" />
          </div>
          <div className="column">
            {/* <!-- TODO: Display rental image --> */}
            <img src="#" alt="" />
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="columns">
          <div className="column is-8">
            <div className="rental">
              {/* <!-- TODO: Display shared category --> */}
              <h2 className="rental-type">true house</h2>
              {/* <!-- TODO: Display title --> */}
              <h1 className="rental-title is-size-3 has-text-weight-semibold">Some Title</h1>
              {/* <!-- TODO: Display city --> */}
              <h2 className="rental-city">New York</h2>
              <div className="rental-room-info">
                {/* <!-- TODO: Display numOfRooms --> */}
                <span>
                  <i className="fa fa-building"></i>4 bedrooms
                </span>
                {/* // <!-- TODO: Display numOfRooms + 4 --> */}
                <span>
                  <i className="fa fa-user"></i> 8 guests
                </span>
                {/* // <!-- TODO: Display numOfRooms + 2 --> */}
                <span>
                  <i className="fa fa-bed"></i> 6 beds
                </span>
              </div>
              {/* <!-- TODO: Display description --> */}
              <p className="rental-description">Some Description</p>
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
