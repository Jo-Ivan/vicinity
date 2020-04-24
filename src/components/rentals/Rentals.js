import React, { useEffect } from "react";
import RentalCard from "./RentalCard";
import Preloader from "../layout/Preloader";

import PropTypes from "prop-types";
import { getRentals } from "../../actions/rentalActions";
import { connect } from "react-redux";

const Rentals = ({ getRentals, rental: { rentals, loading } }) => {
  useEffect(() => {
    getRentals();
  }, [getRentals]);

  if (loading || rentals === null) {
    return <Preloader />;
  }

  return (
    <section id="rentals">
      <div className="columns is-multiline">
        {rentals.map((rental, index) => {
          return <RentalCard rental={rental} key={index} />;
        })}
      </div>
    </section>
  );
};

Rentals.propType = {
  rental: PropTypes.object.isRequired,
  getRentals: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  rental: state.rental
});

export default connect(mapStateToProps, { getRentals })(Rentals);
