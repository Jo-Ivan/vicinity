const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const rentalRoutes = require("./routes/api/rentals");

const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Api Routes
app.use("/api/v1/", rentalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
