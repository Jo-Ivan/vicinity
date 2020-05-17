const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createBooking } = require("../../controllers/bookings");
const auth = require("../../middleware/auth");
const checkRentalOwner = require("../../middleware/checkRentalOwner");

router.post("", auth, checkRentalOwner, createBooking);

module.exports = router;
