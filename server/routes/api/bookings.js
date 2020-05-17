const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createBooking } = require("../../controllers/bookings");
const auth = require("../../middleware/auth");

router.post("", auth, createBooking);

module.exports = router;
