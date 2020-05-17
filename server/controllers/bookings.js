const Booking = require("../models/booking");
const moment = require("moment");
const { validationResult } = require("express-validator");

exports.createBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const bookingData = req.body;
    const booking = new Booking({ ...bookingData, user: res.locals.user.id });

    if (!checkIfBookingDatesAreValid(booking)) {
      return res.send({ title: "Invalid Booking", msg: "Dates are invalid!" });
    }

    const rentalBookings = await Booking.find({ rental: booking.rental });

    if (checkIfBookingIsValid(booking, rentalBookings)) {
      const savedBooking = await booking.save();
      return res.json({ startAt: savedBooking.startAt, endAt: savedBooking.endAt });
    } else {
      return res.send({ title: "Invalid Booking", msg: "Choosen dates are already taken!" });
    }
  } catch (err) {
    return res.send(err);
  }
};

function checkIfBookingDatesAreValid(booking) {
  let isValid = true;

  if (!booking.startAt || !booking.endAt) {
    isValid = false;
  }

  if (moment(booking.startAt) > moment(booking.endAt)) {
    isValid = false;
  }

  return isValid;
}

function checkIfBookingIsValid(pendingBooking, rentalBookings) {
  let isValid = true;

  if (rentalBookings && rentalBookings.length > 0) {
    isValid = rentalBookings.every((booking) => {
      const pendingStart = moment(pendingBooking.startAt);
      const pendingEnd = moment(pendingBooking.endAt);

      const bookingStart = moment(booking.startAt);
      const bookingEnd = moment(booking.endAt);

      return (
        (bookingStart < pendingStart && bookingEnd < pendingStart) ||
        (pendingEnd < bookingEnd && pendingEnd < bookingStart)
      );
    });
  }

  return isValid;
}
