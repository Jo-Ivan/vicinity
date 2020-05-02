const rentals = [
  {
    _id: "a",
    city: "New York",
    title: "Very nice place"
  },
  {
    _id: "ab",
    city: "Berlin",
    title: "Very cool place"
  },
  {
    _id: "abc",
    city: "Los Angeles",
    title: "quiet part of it"
  }
];

exports.getRentals = (req, res) => {
  return res.json(rentals);
};
exports.getRentalById = (req, res) => {
  const { id } = req.params;
  const rental = rentals.find((rental) => rental._id === id);

  return res.json(rental);
};
exports.createRental = (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({ message: `Rental with id: ${rentalData._id} was added` });
};
exports.deleteRental = (req, res) => {
  const { id } = req.params;
  const indexOfRental = rentals.findIndex((rental) => id === rental._id);
  rentals.splice(indexOfRental, 1);

  return res.json({ message: `Rental with id: ${rentalData._id} was deleted` });
};
exports.updateRental = (req, res) => {
  const { id } = req.params;
  const rentalToUpdate = req.body;
  const indexOfRental = rentals.findIndex((rental) => id === rental._id);

  rentals[indexOfRental].city = rentalToUpdate.city;
  rentals[indexOfRental].title = rentalToUpdate.title;

  return res.json({ message: `Rental with id: ${id} was updated` });
};
