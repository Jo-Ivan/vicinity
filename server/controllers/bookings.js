const Booking = require("../models/Booking");

exports.createBooking = (req, res) => {
  const bookingData = req.body;

  return res.json({ msg: "Booking is created!" });
};
