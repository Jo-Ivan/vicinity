const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createBooking } = require("../../controllers/bookings");
const auth = require("../../middleware/auth");
const checkRentalOwner = require("../../middleware/checkRentalOwner");

router.post(
  "",
  [
    auth,
    checkRentalOwner,
    [
      check("startAt", "Start at is required").not().isEmpty(),
      check("endAt", "End at is required").not().isEmpty(),
      check("price", "Price is required").not().isEmpty().toFloat(),
      check("nights", "Nights is required").not().isEmpty(),
      check("guests", "Guests is required").not().isEmpty().toInt()
    ]
  ],
  createBooking
);

module.exports = router;
