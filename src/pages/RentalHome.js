import React, { useState } from 'react';
import RentalCard from '../components/rental/RentalCard';

const RentalHome = () => {
  const [rentals, setRentals] = useState([{
    _id: '1',
    title: "Nice view on ocean",
    city: "San Francisco",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 43
  },
  {
    _id: '2',
    title: "Modern apartment in center",
    city: "New York",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 11
  },
  {
    _id: '3',
    title: "Old house in nature",
    city: "Bratislava",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 23
  },
  {
    _id: '4',
    title: "Cottage with an amazing view",
    city: "Spain",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 3,
    shared: true,
    description: "Very quiet.",
    dailyPrice: 50
  }]);


  return (
    <section id="rentals">
      <h1 className="is-size-2">Book unique homes and experiences today.</h1>
      <div className="columns is-multiline">
        {
          rentals.map((rental, index) => {
            return <RentalCard rental={rental} key={index} />;
          })
        }
      </div>
    </section>
  )
}

export default RentalHome;