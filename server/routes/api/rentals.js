const express = require("express");
const router = express.Router();
const { getRentals, getRentalById, createRental, deleteRentalById } = require("../../controllers/rentals");
const { check } = require("express-validator");
const auth = require("../../middleware/auth");

router.get("/rentals", getRentals);
router.get("/rentals/:id", getRentalById);
router.post(
  "/rentals",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("street", "Street is required").not().isEmpty(),
      check("city", "City is required").not().isEmpty(),
      check("category", "Category is required").not().isEmpty(),
      check("numOfRooms", "Category is required").not().isEmpty().toInt(),
      check("description", "Description is required").not().isEmpty(),
      check("dailyPrice", "Daily Price is required").not().isEmpty().toFloat()
    ]
  ],
  createRental
);
router.delete("/rentals/:id", deleteRentalById);

module.exports = router;
