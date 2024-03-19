const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/user", routes);

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;

// mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
