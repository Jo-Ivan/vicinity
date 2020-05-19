import React from "react";
import PropTypes from "prop-types";
import "./BookingReserve.scss";
import { connect } from "react-redux";

const BookingReserve = ({ rental: { rental, loading } }) => {
  console.log(rental);
  return (
    <div className="booking">
      <h3 className="booking-price">
        $ {rental.dailyPrice} <span className="booking-per-night">per night</span>
      </h3>
      <hr></hr>
      <div className="field">
        <label className="label">Dates</label>
        <div className="control">
          <input placeholder="2020/05/19" type="text" className="input" />
        </div>
      </div>
      <div className="field">
        <label className="label">Guests</label>
        <div className="control">
          <input placeholder="1" type="number" className="input" id="guests" aria-describedby="guests" />
        </div>
      </div>
      <button className="button is-primary is-fullwidth">Reserve</button>
      <hr></hr>
      <p className="booking-note-title">People are interested in this {rental.category}</p>
      <p className="booking-note-text">More than 20 people has checked in this rental in last month.</p>
    </div>
  );
};

BookingReserve.propTypes = {
  rental: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  rental: state.rental
});

export default connect(mapStateToProps, {})(BookingReserve);
