require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");

const userRoutes = require("./api/routes/userRoute")

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/user", userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
