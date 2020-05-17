const Rental = require("../models/Rental");

module.exports = function (req, res, next) {
  const { rental } = req.body;
  const user = res.locals.user;

  Rental.findById(rental)
    .populate("user")
    .exec((error, foundRental) => {
      const rentalOwner = foundRental.user.id;

      if (error) {
        return res.send(error);
      }

      if (rentalOwner === user.id) {
        return res.send({ title: "Invalid User", detail: "Cannot create booking on your rental" });
      }

      next();
    });
};
