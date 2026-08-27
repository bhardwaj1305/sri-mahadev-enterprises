require("dotenv").config();
const leadRoutes = require("./routes/leadRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Sri Mahadev Enterprises API is running",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on http://localhost:${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });