const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
  title: { type: String, required: true, maxlength: [128, "Maximum length is 128 characters"] },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, minlength: [4, "Minimum length is 4 characters"], lowercase: true },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  numOfRooms: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },
  shared: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String, required: true },
  dailyPrice: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rental", RentalSchema);
