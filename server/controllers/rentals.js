const Rental = require("../models/Rental");
const User = require("../models/User");
const { validationResult } = require("express-validator");

// @route GET   api/v1/rentals
// @description Get rentals
// @access      Public
exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to retrieve rental data" });
  }
};

// @route GET   api/v1/rentals/:id
// @description Get a rental by id
// @access      Public
exports.getRentalById = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(404).json({ msg: "Rental not found" });
  try {
    const rental = await Rental.findById(id);

    return res.json(rental);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Rental not found" });
    }
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to retrieve rental data" });
  }
};

// @route POST  api/v1/rentals
// @description Create a rental
// @access      Private
exports.createRental = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, city, street, category, image, numOfRooms, description, shared, dailyPrice } = req.body;

  try {
    const user = await User.findById(req.user.id).select("-password");

    const newRental = new Rental({
      title,
      street,
      city,
      street,
      category,
      image,
      numOfRooms,
      description,
      shared,
      dailyPrice,
      user
    });

    const rental = await newRental.save();

    res.json(rental);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to post rental data" });
  }
};

// @route DELETE  api/v1/rentals/:id
// @description   Delete a rental by id
// @access        Private
exports.deleteRentalById = async (req, res) => {
  const { id } = req.params;
  try {
    const rental = await Rental.findById(id);

    if (!rental) return res.status(404).json({ msg: "Rental not found" });

    await rental.remove();

    res.json({ msg: "Rental removed" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Rental not found" });
    }
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to delete rental data" });
  }
};
