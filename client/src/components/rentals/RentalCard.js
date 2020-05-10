import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../helpers/functions";

import "./RentalCard.scss";

const RentalCard = ({ rental }) => {
  return (
    <div className="column is-3">
      <Link to={`/rentals/${rental._id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={rental.image} alt={rental.title} />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{rental.title}</p>
                <p className="subtitle is-6">{rental.description}</p>
              </div>
            </div>
            <hr className="rental-card-hr" />
            <div className="content">
              <p>
                {capitalize(rental.city)} · {rental.shared ? "shared" : "whole"} {rental.category}{" "}
              </p>
              <p>
                ${rental.dailyPrice} per night · {rental.numOfRooms} room{" "}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentalCard;
