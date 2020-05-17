const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  startAt: { type: Date, required: "Starting date is required" },
  endAt: { type: Date, required: "Ending date is required" },
  price: { type: Number, required: "Price is required" },
  nights: { type: Number, required: true },
  guests: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rental: { type: Schema.Types.ObjectId, ref: "Rental", required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
