import React from 'react';
import './RentalCard.scss';

const RentalCard = ({ rental }) => {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={rental.image} alt={rental.title} />
          </figure>
        </div>
        <div className="card-content rental-card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{rental.title}</p>
              <p className="subtitle is-6">{rental.description}</p>
            </div>
          </div>
          <hr className="rental-card-hr" />
          <div className="content">
            <p>{rental.city}</p>
            <p>${rental.dailyPrice} per night · {rental.numOfRooms} room · {rental.category} · {rental.shared ? 'shared' : 'whole'} </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentalCard;