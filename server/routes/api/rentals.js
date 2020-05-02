const express = require("express");
const router = express.Router();
const { getRentals, getRentalById, createRental, deleteRental, updateRental } = require("../../controllers/rentals");

router.get("/rentals", getRentals);
router.get("/rentals/:id", getRentalById);
router.post("/rentals", createRental);
router.delete("/rentals/:id", deleteRental);
router.patch("/rentals/:id", updateRental);

module.exports = router;
