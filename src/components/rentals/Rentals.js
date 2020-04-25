import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRentals } from "../../actions/rentalActions";

import RentalCard from "./RentalCard";
import Preloader from "../layout/Preloader";

const Rentals = ({ rental: { rentals, loading }, getRentals }) => {
  useEffect(() => {
    getRentals();
  }, [getRentals]);

  if (loading || rentals === null) {
    return <Preloader />;
  }

  return (
    <section id="rentals">
      <div className="columns is-multiline">
        {!loading && rentals.length === 0 ? (
          <h1 className="has-text-primary has-text-centered is-size-2">
            No rentals to show.
          </h1>
        ) : (
          rentals.map((rental) => (
            <RentalCard rental={rental} key={rental.id} />
          ))
        )}
      </div>
    </section>
  );
};

Rentals.propType = {
  rental: PropTypes.object.isRequired,
  getRentals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  rental: state.rental,
});

export default connect(mapStateToProps, { getRentals })(Rentals);
