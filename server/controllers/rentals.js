const Rental = require("../models/Rental");
const User = require("../models/User");
const request = require("request");
const config = require("config");
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

    if (!user || user === null) {
      return res.status(400).json({ msg: "You are not logged in." });
    }

    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${city + " " + street}&key=${config.get("GOOGLE_MAPS_API_KEY")}`, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: "Not found" });
      }

      const mapObject = JSON.parse(body);
      const results = mapObject.results;

      const coordinates = results[0].geometry.location;
      const formattedAddress = results[0].formatted_address;
      console.log(coordinates);
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
        coordinates,
        formattedAddress,
        user
      });

      newRental.save();
      res.json({ msg: "Rental created" });
    });
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
