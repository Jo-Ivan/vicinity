const express = require("express");
const router = express.Router();
const { getRentals, getRentalById, createRental, deleteRentalById } = require("../../controllers/rentals");

router.get("/rentals", getRentals);
router.get("/rentals/:id", getRentalById);
router.post("/rentals", createRental);
router.delete("/rentals/:id", deleteRentalById);

module.exports = router;
