const Booking = require("../models/Booking");

exports.createBooking = (req, res) => {
  return res.json({ msg: "Booking is created!" });
};
