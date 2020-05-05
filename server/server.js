const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Api Routes
app.use("/api/v1", require("./routes/api/rentals"));
app.use("/api/v1/users", require("./routes/api/users"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
